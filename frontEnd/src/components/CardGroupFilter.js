import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../actions/index";
import { generatePublicUrl } from "../urlConfig";
import Card from "./Card/Card";
import { Checkbox, Collapse } from "antd";

const { Panel } = Collapse;

export default function CardGroupFilter(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const renderProducts = (products) => {
    let myProducts = [];
    for (let product of products) {
      myProducts.push(
        <li key={product.name}>
          {product.name}
          {product.children.length > 0 ? (
            <ul>{renderProducts(product.children)}</ul>
          ) : null}
        </li>
      );
    }
    return myProducts;
  };

  function formatDate(d) {
    var date = new Date(d);

    if (isNaN(date.getTime())) {
      return d;
    } else {
      var month = new Array();
      month[0] = "Jan";
      month[1] = "Feb";
      month[2] = "Mar";
      month[3] = "Apr";
      month[4] = "May";
      month[5] = "Jun";
      month[6] = "Jul";
      month[7] = "Aug";
      month[8] = "Sept";
      month[9] = "Oct";
      month[10] = "Nov";
      month[11] = "Dec";

      var day = date.getDate();

      if (day < 10) {
        day = "0" + day;
      }

      return day + " " + month[date.getMonth()] + " " + date.getFullYear();
    }
  }

  const [Checked, setChecked] = useState([]);
  const handleToggle = (product) => {
    const currentIndex = Checked.indexOf(product);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(product);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  return (
    <>
      <div>
        <Collapse defaultActiveKey={["0"]}>
          <Panel header key="1">
            {product.products
              .slice(0)
              .reverse()
              .sort((first, second) => {
                return first.createdAt > second.createdAt ? 1 : -1;
              })
              .map((product, index) => (
                <React.Fragment key={index}>
                  <Checkbox
                    onChange={() => handleToggle(product._id)}
                    type="checkbox"
                    checked={Checked.indexOf(product._id) === -1 ? false : true}
                  />
                  <span>{product.name}</span>
                </React.Fragment>
              ))}
          </Panel>
        </Collapse>
      </div>

      <div className="row row-cols-1 row-cols-md-4 my-2">
        {product.products
          .slice(0)
          .reverse()
          .sort((first, second) => {
            return first.inspectionScore < second.inspectionScore ? 1 : -1;
          })
          .map((product) => (
            <Card
              img={generatePublicUrl(product.carPictures[0].img)}
              title={product.name}
              price={product.price}
              slug={product.slug}
              _id={product._id}
              onClick="View Detais"
              createdAt={formatDate(
                product.createdAt.slice(0, 10).toLocaleString("en-us", {
                  month: "short",
                })
              )}
            />
          ))}
      </div>
    </>
  );
}
