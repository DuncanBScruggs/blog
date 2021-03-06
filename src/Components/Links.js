import React from "react";
import LinksContent from "./LinksContent.json"

function Links() {
    return (
        <div class="row my-5 justify-content-center">
            {LinksContent.map((item) => {
                return (
                    <div class="card text-center col-12 col-sm-6 col-lg-3">
                        <div class="card-header"><img src="../img/githublogo.png" class="img-fluid" /></div>
                        <div class="card-body">
                            <h4 class="card-title"><a href={item.link}>{item.title}</a></h4>
                            <p class="card-text">{item.text}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Links;