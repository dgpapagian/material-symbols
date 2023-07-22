const MATERIAL_SYMBOLS_MAP = {

  "3d-rotation":{
    path:"M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480h60q0 127 84 223.5T436-143l-61-61 40-40L569-90q-22 7-44.208 8.5T480-80Zm29-272v-257h126q18.7 0 31.35 12.65Q679-583.7 679-565v169q0 18.7-12.65 31.35Q653.7-352 635-352H509Zm-227 0v-49h120v-60h-77v-39h77v-59H282v-50h126q18.7 0 31.35 12.65Q452-583.7 452-565v169q0 18.7-12.65 31.35Q426.7-352 408-352H282Zm276-49h71v-158h-71v158Zm262-79q0-128-83.5-224T525-817l60 60-40 40-154-154q22-7 44.208-8T480-880q82.638 0 155.319 31.5Q708-817 762.5-762.5t86 127.181Q880-562.638 880-480h-60Z", 
    keywords: ["3d","rotation"]
  },
};

async function getIcon(name) {
  let new_name;

  if (!(name in MATERIAL_SYMBOLS_MAP)) {
    // try swapping the '_' for a '-'
    new_name = name.replace(/_/gm, `-`);
    if (!(new_name in MATERIAL_SYMBOLS_MAP)) {
      console.log(`Icon "${name}" is not available`);
      return '';
    }else{
      console.log(`Aliased "${name}" with "${new_name}"`);
      return {path: MATERIAL_SYMBOLS_MAP[new_name].path};
    }
  }
  return {path: MATERIAL_SYMBOLS_MAP[name].path};
}
async function getIconList() {
  return Object.entries(MATERIAL_SYMBOLS_MAP).map(([icon, content]) => ({
    name: icon,
    keywords: content.keywords
  }));
}

window.customIcons = window.customIcons || {};
window.customIcons["m3s"] = { getIcon, getIconList };

window.customIconsets = window.customIconsets || {};
window.customIconsets["m3s"] = getIcon;

console.info(
    `%c MATERIAL-SYMBOLS %c Version 1.2.51 `,
    "color: orange; font-weight: bold; background: black",
    "color: white; font-weight: bold; background: dimgray"
);
