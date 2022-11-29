import React from "react";
import "./Home.css";

import Navigation from "../navbar/Navigation";
import Home_Background from "../backgrounds/Home_Background";

import Login from "../forms/Login";

export default function Home() {
  return (
    <>
      <Navigation />

      <div className="Home">
        <div id="gridItem1">Test 1</div>
        <div id="gridItem2">Test 2</div>

        <div id="gridItem3" className="lander">
          <h1>PT Battler</h1>
          <p>Test your might in a battle of the badges!</p>
        </div>
        <div id="gridItem4">Test 4</div>
        <div id="gridItem5">Test 5</div>
        <div id="gridItem6">Test 6</div>
        <div id="gridItem7">Test 7</div>

        {/* gridItem8 */}
        <Login id="gridItem8" />
        <div id="gridItem9">Test 9</div>
        <div id="gridItem10">Test 10</div>
        <div id="gridItem11">Test 11</div>
        <div id="gridItem12">Test 12</div>
        <div id="gridItem13">Test 13</div>
        <div id="gridItem14">Test 14</div>
        <div id="gridItem15">Test 15</div>
      </div>
      <Home_Background />
    </>
  );
}
