const notifyDetchConfig = { serverId: 4130, active: true };

const notifyDetchHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_4130() {
    return notifyDetchConfig.active ? "OK" : "ERR";
}

console.log("Module notifyDetch loaded successfully.");