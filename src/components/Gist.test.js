import { render } from "@testing-library/react";
import Gist from "./Gist";

test("renders Gist", async () => {
  const { findByTestId } = render(
    <Gist
      gist={{
        owner: {
          login: "testUser"
        },
        files: {
          "log.txt": {
            filename: "log.txt"
          }
        },
        description: "test description",
        created_at: "2023-08-31T03:04:24Z",
        updated_at: "2023-08-31T03:04:24Z"
      }}
    />
  );
  const linkElement = await findByTestId("login");
  const description = await findByTestId("description");
  const created = await findByTestId("created");
  const updated = await findByTestId("updated");
  const files = await findByTestId("files");

  expect(linkElement).toHaveTextContent("testUser");
  expect(files).toHaveTextContent("log.txt");
  expect(description).toHaveTextContent("test description");
  expect(created).toHaveTextContent("Created at: 08/31/2023");
  expect(updated).toHaveTextContent("Last Updated: 08/31/2023");
});
