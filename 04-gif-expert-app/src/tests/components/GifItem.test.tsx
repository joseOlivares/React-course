import { render } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe("Pruebas en <GifItem />", () => {
  it("Debe hacer match con el snapshot", () => {
    const title = "Un titulo";
    const url = "https://localhost/algo.jpg";

    const {container} = render(<GifItem title={title} url={url} id={""} tag={""}/>);
    expect(container).toMatchSnapshot();
  });
});