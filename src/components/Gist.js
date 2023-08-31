import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import format from "date-fns/format";

const Gist = ({ gist }) => {
  // formating the date
  const formatDate = (date) => {
    let formatted = format(new Date(date), "MM/dd/yyyy");
    return formatted;
  };

  const filesCount = (files) => {
    // counting the files length
    return Object.keys(files).length;
  };

  const renderFiles = (files) => {
    return Object.keys(files).map((item, index) => {
      return (
        <Anchor href={files[item].raw_url} key={files[item].filename}>
          <Octicon name="file" style={{ fontSize: "14px" }} />
          {files[item].filename}
        </Anchor>
      );
    });
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <div style={{ width: "50%", display: "flex", alignItems: "center" }}>
          <Image background={gist?.owner?.avatar_url}></Image>
          <Text data-testid="login">{gist?.owner?.login}</Text>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text>
            <Octicon name="code" style={{ fontSize: "14px" }} />
            <InnerText>{filesCount(gist?.files)} Files</InnerText>
          </Text>
          <Text>
            <Octicon name="repo-forked" style={{ fontSize: "14px" }} />
            <InnerText>Forks</InnerText>
          </Text>
          <Text>
            <Octicon name="comment" style={{ fontSize: "14px" }} />
            <InnerText>Comments</InnerText>
          </Text>
          <Text>
            <Octicon name="star" style={{ fontSize: "14px" }} />
            <InnerText>Stars</InnerText>
          </Text>
        </div>
      </InnerWrapper>

      <DateWrapper>
        <DateText data-testid="created">
          Created at: {formatDate(gist?.created_at)}
        </DateText>
        <DateText data-testid="updated" style={{ marginLeft: "10px" }}>
          Last Updated: {formatDate(gist?.created_at)}
        </DateText>
      </DateWrapper>
      <DescriptionText data-testid="description" style={{ marginTop: "10px" }}>
        {gist?.description}
      </DescriptionText>
      <FileWrapper data-testid="files">{renderFiles(gist?.files)}</FileWrapper>
      <div style={{ marginTop: "35px" }}>
        <Separater></Separater>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const InnerWrapper = styled.div`
  display: flex;
`;

const Image = styled.div`
  border-radius: 50%;
  width: 28px;
  height: 28px;
  background-image: ${(props) => `url(${props.background})`};
  margin-right: 10px;
`;

const Text = styled.div`
  font-size: 11px;
  color: #1c70d9;
`;

const DescriptionText = styled.div`
  font-size: 18px;
  color: #626465;
  word-wrap: break-word;
`;

const InnerText = styled.div`
  font-size: 11px;
  display: inline;
  color: #2374da;
  margin-left: 5px;
`;

const DateText = styled.div`
  font-size: 11px;
  color: #7b7d7e;
`;

const Anchor = styled.a`
  font-size: 12px;
  color: #0265d6;
  text-decoration: none;
  margin-left: 10px;
`;

const Separater = styled.div`
  background-color: #eaeaea;
  height: 1px;
`;

const FileWrapper = styled.div`
  margin-top: 8px;
`;
const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
`;
export default Gist;
