var sheet = (function() {
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(  "\n" +
        ".card-view {\n" +
        "  padding: 0 0.5%;\n" +
        "  text-align: center;\n" +
        "  overflow: auto; }\n" +
        "  .card-view .card-view-description {\n" +
        "    position: absolute;\n" +
        "    bottom: 0;\n" +
        "    width: 100%;\n" +
        "    background: rgba(255, 255, 255, 0.6);\n" +
        "    padding-top: 5px; }\n" +
        "  .card-view div.card-view-item {\n" +
        "    float: left;\n" +
        "    width: 32%;\n" +
        "    height: 190px;\n" +
        "    position: relative;\n" +
        "    padding: 0.5%;\n" +
        "    margin-bottom: 15px;\n" +
        "    overflow: hidden;\n" +
        "    border-bottom: 1px dotted #eee; }\n" +
        "    .card-view div.card-view-item * {\n" +
        "      white-space: nowrap;\n" +
        "      text-overflow: ellipsis; }\n" +
        "    .card-view div.card-view-item img {\n" +
        "      max-width: 80%; }\n" +
        "    .card-view div.card-view-item h2 {\n" +
        "      font-size: 15px;\n" +
        "      margin-bottom: 4px;\n" +
        "      margin-top: 4px; }\n" +
        "    .card-view div.card-view-item p {\n" +
        "      font-size: 12px;\n" +
        "      margin-bottom: 2px; }\n" +
        "  .card-view skill-summary {\n" +
        "    display: block; }"
        + "\n" +
        "hp-bar, energy-bar, percent-bar {\n" +
        "  position: relative;\n" +
        "  display: block;\n" +
        "  height: 30px;\n" +
        "  width: 100%;\n" +
        "  border-radius: 15px;\n" +
        "  background: #eee;\n" +
        "  overflow: hidden;\n" +
        "  margin-bottom: 2px; }\n" +
        "  hp-bar span, energy-bar span, percent-bar span {\n" +
        "    background: #33cd5f;\n" +
        "    position: absolute;\n" +
        "    height: 100%;\n" +
        "    left: 0; }\n" +
        "  hp-bar label, energy-bar label, percent-bar label {\n" +
        "    position: absolute;\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    text-align: center;\n" +
        "    left: 0;\n" +
        "    line-height: 30px;\n" +
        "    color: white;\n" +
        "    font-weight: bold;\n" +
        "    text-outline: 1px black;\n" +
        "    text-shadow: 1px 1px 1px black; }\n" +
        "\n" +
        "energy-bar {\n" +
        "  height: 25px; }\n" +
        "  energy-bar span {\n" +
        "    background: #00b7c6; }\n" +
        "  energy-bar label {\n" +
        "    line-height: 25px; }\n" +
        "\n" +
        "percent-bar {\n" +
        "  height: 15px;\n" +
        "  margin: 2px auto;\n" +
        "  width: 90%; }\n" +
        "  percent-bar label {\n" +
        "    line-height: 15px;\n" +
        "    font-size: 10px; }\n" +
        "\n" +
        "percent-bar.small {\n" +
        "  height: 10px;\n" +
        "  margin: 0 auto; }\n" +
        "  percent-bar.small label {\n" +
        "    line-height: 10px;\n" +
        "    font-size: 8px; }\n" +
        "\n" +
        ".control-box {\n" +
        "  color: #0db9f0;\n" +
        "  padding: 10px;\n" +
        "  position: absolute; }\n" +
        "  .control-box i {\n" +
        "    margin: 6px; }\n" +
        "  .control-box i.disabled {\n" +
        "    color: #999; }"));
    document.head.appendChild(style);
    return style.sheet;
})();