import React from 'react'
import Icon from "../Icon"
import moment from "moment";
import "./style.scss"

const fileBaseUrl = "https://cdn.address.ir"

function changeAmount(amount){
    if (amount <= 999999){
        return {currency: "هزار", amount: amount/1000}
    }else if(amount <= 999999999){
        return {currency: "میلیون" , amount: amount/1000000}
    }else{
        return {currency: "میلیارد" , amount: amount/1000000000}
    }
}


const Card = ({imgUrl, imageNumber , district, yearlyAmount, monthlyAmount, meter, roomCount , create}) => {

    const backgroundImageStyle = {backgroundImage: `url(${fileBaseUrl + imgUrl})`}
    const {currency:yearCurrency , amount:yearAmount} = changeAmount(yearlyAmount)
    const {currency:mounthCurrency , amount:monthAmount} = monthlyAmount!==0 ? changeAmount(monthlyAmount):{}
    return (
        <div className="card-container">
            <div className="card-image-box" style={backgroundImageStyle}>
                <div className="card-image-box_content">
                    <div className="card-image-box_content_image-from">
                        <Icon name="card-tik" size="14"/>
                        <span>عکس و اطلاعات از آدرس</span>
                    </div>
                    <div className="card-image-box_content_image-number">
                        <span>{imageNumber}</span>
                        <Icon name="camera" size="18"/>
                    </div>
                </div>
                <div className="card-image-box_content">
                    <div className="card-image-box_content_district"> 
                        <span>{district}</span>
                        <span>{moment(create).fromNow()}</span>
                    </div>
                    <div className="card-image-box_content_tag">
                        <Icon name="tag" size="16"/>  
                    </div>
                </div>
            </div>
            <div className="card-home-data">
                <div className="card-home-data_row1">
                    <div className="card-home-data_row1_item">
                        <h4>
                            {yearAmount}
                        </h4>
                        <div>
                            <h4>ودیعه</h4>
                            <p>{yearCurrency} تومان</p>
                        </div>
                    </div>
                    {monthlyAmount !== 0 && (
                        <Icon name="rent" size="16"/>
                    ) }
                    <div className="card-home-data_row1_item">
                        {monthlyAmount === 0 ?(
                            <h3>رهن کامل</h3>
                        ):(
                            <>
                                <h4>
                                    {monthAmount}
                                </h4>
                                <div>
                                    <h4>اجاره</h4>
                                    <p>{mounthCurrency} تومان</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="card-home-data_row2">
                    <div>
                        <Icon name="meter" size={12}/>
                        <b>{meter}</b> متر
                    </div>
                    <div>
                        <Icon name="bed" size={12}/>
                        <b>{roomCount}</b> خواب
                    </div>
                    <div>
                        <span>بیشتر</span>
                        <span>></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

