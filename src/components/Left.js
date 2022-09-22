import React, { Component } from 'react'

class Left extends Component {
    render() {
        return (
            <div>
               <div className="container pt-3">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">
                                <div className="title-input d-flex pb-3">
                                     <h6 className="title">Repositories</h6>
                                     <button className='ms-5 btn btn-success'>New</button>
                                </div>
                                <input type="text" placeholder='Find a repository...'/>
                                <div className="texts pt-3">
                                   <div className='text1 pb-2'>GuluSuleymanova/Homework</div>
                                   <div className='text1 pb-2'>GuluSuleymanova/ONEZERO</div>
                                   <div className='text1 pb-2'>GuluSuleymanova/WOLF</div>
                                   <div className='text1 pb-2'>GuluSuleymanova/Reactjs</div> <hr />
                                </div>
                                <div className="title-text pt-2">
                                    <h6 className="title1">Recent activity</h6>
                                    <div className="text">When you take actions across GitHub, we’ll provide links to that activity here.</div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12 col-12">
                                <div className="title1">All activity</div>
                                <div className="title2 pt-3">HasanBakhtiar starred 2 repositories on 8 Dec 2021</div>

                            <div className="general-cards pt-2">
                                <div className="card1">
                                <div class="card w-75">
                                <div class="card-body">
                                     <h5 class="card-title">axios/axios</h5>
                                     <p class="card-text">Promise based HTTP client for the browser and node.js</p>
                                     
                                </div>
                                </div>
                                </div>

                                <div className="title3 pt-3">HasanBakhtiar starred sharatsachin/ytplaylist-len on 28 Nov 2021</div>
                                <div className="card2 pt-3">
                                <div class="card w-75">
                                <div class="card-body">
                                     <h5 class="card-title">sharatsachin/ytplaylist-len</h5>
                                     <p class="card-text">A small web app to get the lengths of playlists on YouTube</p>
                                     
                                </div>
                                </div>
                                </div>

                                <div className="title4 pt-3">HasanBakhtiar created a repository HasanBakhtiar/Totem on 20 Nov 2021</div>
                                <div className="card3 pt-3">
                                <div class="card w-75">
                                <div class="card-body">
                                     <h5 class="card-title">HasanBakhtiar/Totem</h5>
                                     <p class="card-text">This repo for totem</p>
                                     
                                </div>
                                </div>
                                </div>
                            </div> 
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12">
                                <h5 className="title5">Explore repositories</h5>
                                <h6 className="title6 pt-2">getferdi/ferdi</h6>
                                <div className="text1 pt-2"> Ferdi helps you organize how you use your favourite apps by combining them into one application</div> <hr />
                                <h6 className="title7 pt-2">coolsnowwolf/lede</h6>
                                <div className="text2 pt-2">Lean's OpenWrt source</div> <hr />

                                <h6 className="title8 pt-2">tikv/pd</h6>
                                <div className="text3 pt-2">Placement driver for TiKV</div>
                            </div>
                            
                        </div>
                    </div>
            </div>
        )
    }
}

export default Left
