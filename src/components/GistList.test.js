import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/index";
import GistList from "./GistList";

test("renders GistList", async () => {
  const { findByTestId } = render(
    <Provider store={store}>
      <GistList />
    </Provider>
  );
  const linkElement = await findByTestId("wrapper");
  expect(linkElement).toBeInTheDocument();
});
