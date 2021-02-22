var data = {
    "chat_id" : msg.chat.id,
    "text"  : "hay Kamu",
    "parse_mode" : "HTML",
    "reply_markup" : {
        "inline_keyboard" : [
            [
                { "text": "Google", "url": "https://www.google.com" },
            ],
        ]
    }
};
tg.request("sendMessage", data);