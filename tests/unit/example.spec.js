import { shallowMount } from "@vue/test-utils";
import Accueil from "@/components/Accueil.vue";

describe("Accueil.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Accueil, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
