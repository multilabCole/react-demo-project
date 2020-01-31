import React, { useState, useEffect } from "react";
import Breadcrumbs from "../Common/Breadcrumbs";
import { Row } from "react-bootstrap";
import SelectInput from "../Common/SelectInput";
import emptyImage from "../../../public/images/emptyImage.jpeg";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import { loadProducts } from "../../redux/actions/productAction";

const sortOptions = ["Default", "Price high to low", "Price low to high"];
const resultsPerPageOptions = ["All", "24", "48"];

const ProductListingPage = ({ products, loadProducts, ...props }) => {
  const [currentSortingOption, setCurrentSortingOption] = useState(
    sortOptions[0]
  );
  const [currentResultsPerPage, setCurrentResultsPerPage] = useState(
    resultsPerPageOptions[0]
  );

  useEffect(() => {
    if (products.length === 0) {
      loadProducts().catch(error => {
        console.log("products failed to load");
      });
    }
  }, [props.products]);

  console.log("what's inside our products", products);

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;

    // We don't have to worry about specifiying here since
    // changing an option would still fire the other setter
    // but since it's value never changed nothing will re-render

    setCurrentSortingOption(prevOption => ({
      [name]: value
    }));
    setCurrentResultsPerPage(prevResults => ({
      [name]: value
    }));

    function createRows() {
      const rows = [...Array(Math.ceil(products.length / 4))];
      const productRows = rows.map((row, index) => {
        products.slice(index * 4, index * 4 + 4);
      });
    }
  }

  return (
    <>
      <Breadcrumbs />
      <h2>test</h2>
      <Row>
        <div className="col-sm-12" id="cc-area-controls">
          {/* This Row can be broken into seperate components so that you could use this
            on a search results page for example */}
          <Row>
            <div id="sort-by-controls" className="col-sm-4 col-xs-12">
              <Row className="form-group">
                <div className="col-md-3 col-sm-4" id="sort-by-label-div">
                  <label
                    id="sort-by-label"
                    className="control-label"
                    htmlFor="sort-by"
                  >
                    Sort By:
                  </label>
                </div>
                <div className="col-md-6 col-sm-8">
                  <SelectInput
                    name={"sort-by"}
                    onChange={handleChange}
                    defaultOption={sortOptions[0]}
                    value={currentSortingOption["sort-by"]}
                    options={sortOptions}
                  />
                </div>
              </Row>
            </div>
            <div id="view-by-controls" className="col-sm-3 col-xs-12">
              <Row className="form-group">
                <div className="col-md-4 col-sm-4">
                  <label
                    id="view-by-label"
                    className="control-label"
                    htmlFor="view-by"
                  >
                    View By:
                  </label>
                </div>
                <div className="col-md-8 col-sm-8 view-by-options">
                  <div id="product-per-page" className="btn-group">
                    <a
                      className="btn btn-default grid-list2 gridButtonTwo"
                      href="#"
                    >
                      2
                    </a>
                    <a className="btn btn-default grid-list2" href="#">
                      3
                    </a>
                    <a className="btn btn-default grid-list2" href="#">
                      4
                    </a>
                  </div>
                </div>
              </Row>
            </div>
            <div
              id="results-page-controls"
              className="col-sm-4 col-xs-12 offset-sm-1 hidden-xs hidden-sm"
            >
              <Row className="form-group">
                <div className="col-md-7 col-sm-4" id="results-label">
                  <label htmlFor="results-page">Results per page:</label>
                </div>
                <div className="col-md-5 col-sm-4">
                  <SelectInput
                    name="results-page"
                    onChange={handleChange}
                    defaultOption={resultsPerPageOptions[0]}
                    value={currentResultsPerPage["results-page"]}
                    options={resultsPerPageOptions}
                  />
                </div>
              </Row>
            </div>
          </Row>
        </div>
      </Row>
      <hr className="plp-hr" />
      <Row className="justify-content-between m-0">
        <div className="col-xs-8" id="listing-result-text">
          <span>Results: 1 - 7 (of 7)</span>
        </div>
        <div className="col-xs-4">
          <a className="pull-right cc-button-primary" href="#">
            <span>Refine Results</span>
          </a>
        </div>
      </Row>
      <hr className="plp-hr" />
      <Row>
        <ProductCard imageSrc={emptyImage} title="test" />
        <ProductCard imageSrc={emptyImage} title="test" />
        <ProductCard imageSrc={emptyImage} title="test" />
        <ProductCard imageSrc={emptyImage} title="test" />
      </Row>
      <Row>
        <ProductCard imageSrc={emptyImage} title="test" />
        <ProductCard imageSrc={emptyImage} title="test" />
        <ProductCard imageSrc={emptyImage} title="test" />
      </Row>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  // This can be used to map images once
  // product creation has been added

  // const products = state.products.map(product => {
  //     if (product.img.length === 0) {
  //         product.img = emptyImage.toString();
  //     }
  //     return product
  // })

  // map out products to segement them into
  // the designated grid value

  // const products = state.products.map((product,index) => {

  // })

  return {
    products: state.products
  };
}

const mapDispatchToProps = {
  loadProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingPage);
