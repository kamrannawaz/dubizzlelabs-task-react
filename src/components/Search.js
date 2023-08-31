import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Octicon from "react-octicon";
import { getAllUsers, getUser, getLoader } from "../store/actions/index";

const Search = () => {
  const dispatch = useDispatch();

  // actual debounce function
  const debounce = (callback, timeout) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback.apply(this, args);
      }, timeout);
    };
  };

  const getData = (query) => {
    // dispatching action
    dispatch(getLoader());
    if (query) {
      dispatch(getUser(query.trim()));
    } else {
      dispatch(getAllUsers());
    }
  };

  const debounced = debounce(getData, 500);

  // calling serach function on keyup event
  const search = (event) => {
    // made debounced function for waiting a little so don't want to search on every key input
    debounced(event.target.value);
  };

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input onKeyUp={search} placeholder="Search Gists for the username" />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export default Search;
