//CORE
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

//CUSTOM
import { UtilityStyles } from "Styles/Utils";
import Website from "Components/Website";
import { store } from "Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Website />
        <UtilityStyles />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
