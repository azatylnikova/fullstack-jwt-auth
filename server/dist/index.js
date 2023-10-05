var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = 5000;
const app = express;
const start = () => __awaiter(this, void 0, void 0, function* () {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
    }
    catch (e) {
        console.log(e);
    }
});
start;
//# sourceMappingURL=index.js.map