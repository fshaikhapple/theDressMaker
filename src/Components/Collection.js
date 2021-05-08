import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom";
import { top100data } from "../topPosts";
// const images = top100data.map(i => i.media_url)
// function uniq(a) {
//     return Array.from(new Set(a));
// }


let result = [];
const map = new Map();
for (const item of top100data) {
    if (!map.has(item.id)) {
        map.set(item.id, true);    // set any value to Map
        result.push({
            id: item.id,
            media_url: item.media_url
        });
    }
}
// console.log(result)
result = result.splice(0, 5);

export const Collection = (props) => {
    const posts = useSelector(state => state.firestoreReducer?.data?.posts?.ljFCVbsegYI1kBYCHDZ5?.mockDataPosts)
    // console.log("posts",posts);
    return (
        <div>
          		<div class="hero-wrap hero-bread pb-5" style={{ backgroundImage: `url("./images/bg_6.jpeg")` }}>
				<div class="container p-4">
					<div class="row no-gutters slider-text align-items-center justify-content-center">
						<div class="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
							<h1 class="mb-0 bread">Collection</h1>
						</div>
					</div>
				</div>
			</div>
            <div class="col-lg-4 sidebar ftco-animate fadeInUp ftco-animated">
                <div class="sidebar-box">
                    <form action="#" class="search-form">
                        <div class="form-group">
                            <span class="icon fa fa-search"></span>
                            <input type="text" class="form-control" placeholder="Type a keyword and hit enter" />
                        </div>
                    </form>
                </div>
                <div class="sidebar-box ftco-animate fadeInUp ftco-animated">
                    <div class="categories">
                        <h3>Categories</h3>
                        <li><a href="#">Bags <span>(12)</span></a></li>
                        <li><a href="#">Shoes <span>(22)</span></a></li>
                        <li><a href="#">Dress <span>(37)</span></a></li>
                        <li><a href="#">Accessories <span>(42)</span></a></li>
                        <li><a href="#">Makeup <span>(14)</span></a></li>
                        <li><a href="#">Beauty <span>(140)</span></a></li>
                    </div>
                </div>
                {/* <div class="sidebar-box ftco-animate fadeInUp ftco-animated">
                    <h3>Recent Blog</h3>
                    <div class="block-21 mb-4 d-flex">
                        <a class="blog-img mr-4"
                        //  style="background-image: url(images/image_1.jpg);"
                        ></a>
                        <div class="text">
                            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <div class="meta">
                                <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                                <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="block-21 mb-4 d-flex">
                        <a class="blog-img mr-4"
                        // style="background-image: url(images/image_2.jpg);"
                        ></a>
                        <div class="text">
                            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <div class="meta">
                                <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                                <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="block-21 mb-4 d-flex">
                        <a class="blog-img mr-4"
                        // style="background-image: url(images/image_3.jpg);"
                        ></a>
                        <div class="text">
                            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <div class="meta">
                                <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                                <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div class="sidebar-box ftco-animate fadeInUp ftco-animated">
                    <h3>Tag Cloud</h3>
                    <div class="tagcloud">
                        <a href="#" class="tag-cloud-link">dish</a>
                        <a href="#" class="tag-cloud-link">menu</a>
                        <a href="#" class="tag-cloud-link">food</a>
                        <a href="#" class="tag-cloud-link">sweet</a>
                        <a href="#" class="tag-cloud-link">tasty</a>
                        <a href="#" class="tag-cloud-link">delicious</a>
                        <a href="#" class="tag-cloud-link">desserts</a>
                        <a href="#" class="tag-cloud-link">drinks</a>
                    </div>
                </div>
                <div class="sidebar-box ftco-animate fadeInUp ftco-animated">
                    <h3>Paragraph</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    {posts && posts.map((item, i) => {
                        return <div class="col-sm col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
                            <div class="product">
                                <a href="#" class="img-prod">
                                    <span class="status">New Arrival</span>
                                </a>
                                <div class="text py-3 px-3">
                                    <Link to={`/Singleproduct/${item.id}`}>
                                        <a className="img-prod">
                                            <img className="img-fluid" src={item.media_url} alt="Colorlib Template" />
                                        </a>
                                    </Link>
                                    <h3><a href="#">Young Woman Wearing Dress</a></h3>
                                    <div class="d-flex">
                                        <div class="pricing">
                                            <p class="price"><span>$120.00</span></p>
                                        </div>
                                        <div class="rating">
                                            <p class="text-right">
                                                <span class="ion-ios-star"></span>
                                                <span class="ion-ios-star"></span>
                                                <span class="ion-ios-star"></span>
                                                <span class="ion-ios-star-half"></span>
                                                <span class="ion-ios-star-outline"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <p class="bottom-area d-flex justify-content-center">
                                        <a href="#" class="add-to-cart">
                                            <span> WishList <i class="ion-ios-heart-empty ml-1"></i></span>
                                        </a>
                                        {/* <a href="#" class="ml-auto">
                                            <span><i class="ion-ios-heart-empty"></i></span>
                                        </a> */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div class="row mt-5">
                    <div class="col text-center">
                        <div class="block-27">
                            <ul>
                                <li><a href="#">&lt;</a></li>
                                <li class="active"><span>1</span></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">&gt;</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}