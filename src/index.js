import React from "react";
import ReactDOM from "react-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import FormContainer from "./components/container/FormContainer";

import("./initialize").then(({ initModel }) => {
  const wrapper = document.getElementById("create-article-form");
  const store = init({
    models: initModel(),
    redux: {
      devtoolOptions: {
        disabled: false
      }
    }
  });
  const Root = _ => (
    <Provider store={store}>
      <FormContainer />
    </Provider>
  );
  wrapper ? ReactDOM.render(<Root />, wrapper) : false;
});
