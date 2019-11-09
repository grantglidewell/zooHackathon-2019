import Badge from "../components/globals/Badge";
import BaseAlert from "../components/globals/BaseAlert";
import BaseButton from "../components/globals/BaseButton";
import BaseCheckbox from "../components/globals/BaseCheckbox";
import BaseInput from "../components/globals/BaseInput";
import BaseDropdown from "../components/globals/BaseDropdown";
import BaseNav from "../components/globals/BaseNav";
import BasePagination from "../components/globals/BasePagination";
import BaseProgress from "../components/globals/BaseProgress";
import BaseRadio from "../components/globals/BaseRadio";
import BaseSlider from "../components/globals/BaseSlider";
import BaseSwitch from "../components/globals/BaseSwitch";
import BaseTable from "../components/globals/BaseTable";
import BaseHeader from "../components/globals/BaseHeader";
import Card from "../components/globals/Card";
import StatsCard from "../components/globals/StatsCard";
import Modal from "../components/globals/Modal";
import TabPane from "../components/globals/Tabs/TabPane";
import Tabs from "../components/globals/Tabs/Tabs";

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BaseDropdown.name, BaseDropdown);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSlider.name, BaseSlider);
    Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(BaseTable.name, BaseTable);
    Vue.component(BaseHeader.name, BaseHeader);
    Vue.component(Card.name, Card);
    Vue.component(StatsCard.name, StatsCard);
    Vue.component(Modal.name, Modal);
    Vue.component(TabPane.name, TabPane);
    Vue.component(Tabs.name, Tabs);
  }
};
