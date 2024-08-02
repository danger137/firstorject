'use client';
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./detail.css"
import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";




export default function Details() {

    let [ad,setAd] = useState({});

let meraData = useParams();

useEffect(()=>{

 async function getData(){

 let resp =  await axios.get("https://fakestoreapi.com/products/"+meraData.hello);
 setAd(resp.data)
 console.log(resp.data);

 }
 getData();


},[])


    return <div>
        <div className="container">
  <div className="card">
    <div className="container-fliud">
      <div className="wrapper row">
        <div className="preview col-md-6">
          <div className="preview-pic tab-content">
            <div className="tab-pane active" id="pic-1">
           
              <TransformWrapper>
      <TransformComponent>
      <img id="mypic" src={ad.image} />
      </TransformComponent>
    </TransformWrapper>
            </div>
          </div>
        </div>
        <div className="details col-md-6">
          <h3 className="product-title">{ad.title}</h3>
          <div className="rating">
            <div className="stars">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
            <span className="review-no">41 reviews</span>
          </div>
          <p className="product-description">
          {ad.description}
          </p>
          <h4 className="price">
            current price: <span>{ad.price}</span>
          </h4>
          <p className="vote">
            <strong>91%</strong> of buyers enjoyed this product!{" "}
            <strong>(87 votes)</strong>
          </p>
          <h5 className="sizes">
            sizes:
            <span className="size" data-toggle="tooltip" title="small">
              s
            </span>
            <span className="size" data-toggle="tooltip" title="medium">
              m
            </span>
            <span className="size" data-toggle="tooltip" title="large">
              l
            </span>
            <span className="size" data-toggle="tooltip" title="xtra large">
              xl
            </span>
          </h5>
          <h5 className="colors">
            colors:
            <span
              className="color orange not-available"
              data-toggle="tooltip"
              title="Not In store"
            />
            <span className="color green" />
            <span className="color blue" />
          </h5>
          <div className="action">
            <button className="add-to-cart btn btn-default" type="button">
              add to cart
            </button>
            <button className="like btn btn-default" type="button">
              <span className="fa fa-heart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>



}