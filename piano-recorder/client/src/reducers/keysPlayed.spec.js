import { createStore } from "redux";
import keysPlayed from "./keysPlayed";
import { addKey } from "../actions/index";

it("keysPlayed reducer handles adding a key", () => {
    const store = createStore(keysPlayed);
    store.dispatch(addKey("E1"));
    expect(store.getState()).toContain("E1");
});
