import * as fs from "fs"
import path from "path"

let args= process.argv.slice(2);

let srcDir = "lib";
let tempDir= args[0];
//tempDir="dist";
if (! tempDir) throw new Error("script argument is not defined");
console.log("Copy files to",tempDir);
// clear directory
if (fs.existsSync(tempDir)) {
    for (const file of fs.readdirSync(tempDir)) {
        let filePath= path.join(tempDir, file);
         if (fs.lstatSync(filePath).isDirectory())
            fs.rmSync(filePath, { recursive: true, force: true });
        else
            fs.unlinkSync(filePath);
    }
}
else fs.mkdirSync(tempDir);
if (1) {
fs.copyFileSync("./package.json", path.join(tempDir,"package.json"));
//fs.symlinkSync("../"+srcDir,  path.join(tempDir, srcDir), "junction");
fs.cpSync(srcDir, path.join(tempDir, srcDir), { recursive: true, force: true })
}
//fs.copyFileSync("./lib", path.join(tempDir,"lib"));