function OnClickAvatarEvent()
{
    let list = [
        "嘿！点我干嘛！",
        "玩局我的世界吗?",
        "别点了吧！疼！",
        "666",
        "下个启动器吧"
    ];
    let id = Math.floor(Math.random() * list.length);
    alert(list[id]);
}