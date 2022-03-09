import React, { useState } from "react";
import PortfolioImage from "../portfolioImage/portfolioImage.component";
import { connect } from "react-redux";
import './portfolioBox.styles.scss';
import SelectedImageBox from "../selectedImageBox/selectedImageBox.component";


const PortfolioBox = ({ urlList }) => {
    const [imageClicked, setImageClicked] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openImageInfoBox = (imageUrl) => {
        setImageClicked(true);
        setSelectedImage(imageUrl)
    }

    const backgroundClick = () => {
        setImageClicked(false);
    }

    return (
        <div className="portfolioBoxContainer">
            {
                imageClicked ?
                    <div onClick={backgroundClick} className="selectedImageInfoContainer">
                        <SelectedImageBox selectedImage={selectedImage} />
                    </div>
                    :
                    <div></div>
            }

            <div className="portfolioInside">
                {
                    urlList.map(image => (
                        <PortfolioImage clickHandle={openImageInfoBox} key={image} imageUrl={image} />
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    urlList: state.portfolio.urlList
});

export default connect(mapStateToProps)(PortfolioBox);