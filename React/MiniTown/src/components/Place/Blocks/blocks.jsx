import axios from "axios";
import React, { useState } from "react";
import { baseurl } from "../../../App";
import { S } from "./style";
import DOT from "../../../assets/listdot.png"
import TITLE from "../../../assets/MiniTown2.png";
import BACK from '../../../assets/placeback2.png'
import PlaceMap from '../Map'
import Search from '../List'

function ModalOn(data,setData,setOnoff){
    console.log('data:',data);
    setData(data);
    setOnoff(true);

}

function Blocks(props){

    return(
        <S.BlockWrapper onClick={()=>ModalOn(props.data,props.setData,props.setOnoff)}>
            <S.BlockImgWrapper>

            </S.BlockImgWrapper>
            <S.BlockTitle>{props.data.name}</S.BlockTitle>
            <S.NumWrapper>
                <S.Dot src={DOT} />
                <S.NumText>
                    {props.data.phone}
                </S.NumText>
            </S.NumWrapper>
        </S.BlockWrapper>
    )
}

function BlocksList(){
    const [data,setData] = useState();
    const [places,setPlace] = useState(0);
    const [onoff,setOnoff] = useState(false);

    console.log(places)
    if(!places){
        console.log(!places)
        const body = {
            region:'대전 유성구'
        }
        axios.post(baseurl+'api/place',body,{
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('access')}`
            }
        })
        .then(res=>{
            console.log('asdf')
            console.log(res);
            console.log(res.data.data)
            setPlace(res.data.data);
        })
    }

    return(<>

{
        onoff &&
        <S.DetailBody>
            <S.Back src={BACK} onClick={()=>{setOnoff(false)}} />
            <S.DetailHead>
                <S.DetailHeadTitle src={TITLE} />
            </S.DetailHead>
            <S.DetailWrapper>
                <S.DetailImgWrapper>

                </S.DetailImgWrapper>
                <S.MidWrapper>
                    <S.DetailTitleWrapper>
                        <S.DetailTitle>{data.name}</S.DetailTitle>
                        <S.DetailAddr>{data.fullAddress}</S.DetailAddr>
                    </S.DetailTitleWrapper>
                    <S.ListsWrapper>
                        <S.DetailListWrapper>
                            <S.Dot src={DOT} />
                            <S.DetailNum>
                                전화번호:{data.phone}
                            </S.DetailNum>
                        </S.DetailListWrapper>
                        <S.DetailListWrapper>
                            <S.Dot src={DOT} />
                            <S.DetailInfo>
                                설명:{data.info}
                            </S.DetailInfo>
                        </S.DetailListWrapper>
                    </S.ListsWrapper>
                </S.MidWrapper>
                <S.Apply>
                    <p>예약하기</p>
                </S.Apply>
            </S.DetailWrapper>
        </S.DetailBody>
          
    }
    {!onoff &&
    <>
    <PlaceMap />
    <Search />
        <S.WrapperWrapper>
            <S.Wrapper>
                <S.LeftSide>
                    {places ? places.map((value,index)=>(
                        (index+1)%3 === 1 ? <Blocks  data={value} setData={setData} setOnoff={setOnoff} /> : <></>
                    )) :<></>}
                </S.LeftSide>
                <S.MidSide>
                {places ? places.map((value,index)=>(
                        (index+1)%3 === 2 ? <Blocks  data={value} setData={setData} setOnoff={setOnoff} /> : <></>
                    )) :<></>}
                </S.MidSide>
                <S.RightSide>
                {places ? places.map((value,index)=>(
                        (index+1)%3 === 0 ? <Blocks  data={value} setData={setData} setOnoff={setOnoff} /> : <></>
                    )) :<></>}
                </S.RightSide>
            </S.Wrapper>
        </S.WrapperWrapper>
        </>
}
        </>
        
    )
}

export default BlocksList;