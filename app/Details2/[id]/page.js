'use client';
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
// import { adArray } from "@/app/Ads/page";
import "./page.css";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import React, { Component } from "react";



export default function Details2() {

    let [detail,setDetail] = useState([]);

let meraData = useParams();

let idMili = adArray.filter((ad)=>{
    if(meraData.id == ad.id){
        return true
    }
})

useEffect(()=>{
  if(idMili){
    setDetail(idMili);
    console.log(idMili);
}
},[])
console.log(meraData);


    return <div>
           {
            detail.map((meriAd,i)=>{
             return <div key={i} className="container">
              <div className="card">
                <div className="container-fliud">
                  <div className="wrapper row">
                    <div className="preview col-md-6">
                      <div className="preview-pic tab-content">
                        <div className="tab-pane active" id="pic-1">             
                          <TransformWrapper>
      <TransformComponent>
      <img id="mypic" src={ "/"+ meriAd.picture} />
      </TransformComponent>
    </TransformWrapper>
                        </div>
                      </div>
                    </div>
                    <div className="details col-md-6">
                      <h3 className="product-title">{meriAd.title}</h3>
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
                     {meriAd.details}
                      </p>
                      <h4 className="price">
                        current price: <span>{meriAd.price}</span>
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
            })
           }

    </div>



}