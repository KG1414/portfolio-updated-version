import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: true,
            buttonStatus: true,
            buttonClicked: true,
            menuColor: true,
        };
    }

    componentDidMount() {
        this.listener = document.addEventListener("scroll", event => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 120) {
                if (this.state.status) {
                    this.setState({ status: false, buttonStatus: false });
                }
            } else {
                if (!this.state.status) {
                    this.setState({ status: true, buttonStatus: true });
                }
            }
        });
    }

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }

    // onClickHandler = () => {
    //     if (this.state.menuColor) {
    //         this.setState({ menuColor: !this.state.menuColor });
    //     }
    // }

    render() {
        let navBarStyle = { color: "" };
        if (!this.state.status) {
            navBarStyle = {
                color: "grey",
            };
        };

        let buttonStyle = "navbar-toggler navbar-dark";
        if (!this.state.buttonStatus || !this.state.menuColor) {
            buttonStyle = "navbar-toggler navbar-light";
        }

        return (
            <div>
                <nav style={{
                    backgroundColor: this.state.status ? null : "#fff",
                }}


                    className={this.state.menuColor ? "navbar navbar-expand-md fixed-top" : "navbar dropdown navbar-expand-md fixed-top"}>
                    <div className="container-fluid">
                        <a className="navbar-brand"
                            href="/"
                            style={{ color: this.state.status && this.state.menuColor ? null : "grey" }}
                        ><i class="fab fa-cloudversify"></i>kyle gallard</a>

                        {/* <i class="fab fa-cloudsmith"></i> */}
                        {/* <i class="fab fa-cloudversify"></i> */}

                        <button
                            onClick={() => this.setState({ menuColor: !this.state.menuColor })}
                            className={buttonStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a style={navBarStyle} className={this.state.menuColor ? "nav-link" : "nav-link navo"} href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a style={navBarStyle} className={this.state.menuColor ? "nav-link" : "nav-link navo"} href="#about-section">About</a>
                                </li>
                                <li className="nav-item">
                                    <a style={navBarStyle} className={this.state.menuColor ? "nav-link" : "nav-link navo"} href="#projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a style={navBarStyle} className={this.state.menuColor ? "nav-link" : "nav-link navo"} href="#contact-form-section">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>

            </div>
        );
    }
}

export default Header;
