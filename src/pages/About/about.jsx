import React from "react";
import "./about.css";
import Carousel from 'react-bootstrap/Carousel';

export const About = () => {
    return (
        <div className="about">
            <h2>About Us</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at est auctor, gravida purus nec, iaculis ex. Vestibulum semper, leo sed feugiat malesuada, arcu ipsum hendrerit tellus, nec tempus ex justo id urna. Quisque iaculis sagittis velit, ut volutpat dui ultrices eu. Morbi lacinia neque vel feugiat dapibus. Suspendisse potenti. Praesent rhoncus neque sed nibh faucibus, a luctus justo malesuada. Aliquam vestibulum elit in eros venenatis posuere. Nulla facilisi.
            </p>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(17).webp"
                        alt="Fecond slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>
                Sed sit amet nisl nec elit vestibulum faucibus. Fusce elementum dui tellus, ac fermentum ipsum scelerisque ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a convallis massa, in commodo enim. Donec finibus commodo eros ut faucibus. Sed vestibulum, nulla ut dignissim lacinia, mi quam egestas felis, nec aliquet quam metus at velit. Quisque non sem id lorem pellentesque lacinia id nec lacus. Aliquam auctor mauris id lacinia aliquam. Integer ac neque auctor, aliquam mi non, vestibulum metus. Vestibulum sit amet laoreet nunc. Suspendisse pretium metus eu suscipit bibendum. Integer congue nulla in neque facilisis, a varius nisi sollicitudin.
            </p>
            <p>
                Integer vitae sem vitae mi blandit tempus nec id orci. Nunc commodo mi at tortor faucibus, ut tincidunt lorem laoreet. Sed fermentum tortor vel risus gravida, a dignissim lectus interdum. Vestibulum at lectus vitae erat euismod semper. Fusce suscipit pulvinar orci, et fermentum massa aliquam nec. Curabitur consectetur ullamcorper tellus at fringilla. Vestibulum in ultrices ex. Sed ut urna arcu. Integer vitae dui pellentesque, condimentum eros ut, fermentum tellus.
            </p>
        </div>
    );
};
