import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getLoader } from "../store/actions/index";
import Gist from "./Gist";

const GistList = () => {
  const dispatch = useDispatch();
  const gistRes = useSelector(({ gist }) => gist);
  const [gistList, setGistList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");

  //   this useEffect act as component did mount & called on when dom mounted
  useEffect(() => {
    getGistPublic();
  }, []);

  //   this useEffect calls every time when new data arrives
  useEffect(() => {
    if (gistRes.list.length >= 0) {
      const list = gistRes.list;
      setGistList(list);
    }
  }, [gistRes]);

  useEffect(() => {
    setLoader(gistRes.loader);
  }, [gistRes.loader]);

  useEffect(() => {
    setError(gistRes.error);
  }, [gistRes.error]);

  //   dispatch function for all users
  const getGistPublic = () => {
    dispatch(getLoader());
    dispatch(getAllUsers());
  };

  return (
    <Wrapper data-testid="wrapper">
      {error ? (
        <Error>{error}</Error>
      ) : (
        <>
          {loader === true ? (
            <Loader>Loading...</Loader>
          ) : (
            gistList.map((item) => {
              return <Gist gist={item} key={item.id} />;
            })
          )}
        </>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 8px;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  font-size: 20px;
`;
const Error = styled.div`
  font-size: 20px;
`;
export default GistList;
