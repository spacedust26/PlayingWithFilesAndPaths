// Program to declutter files of numerous extensions by creating folders for the respective extension and adding the files into these

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "D:\\PlayingWithFilesAndPaths" // the path that contains the files to be decluttered
let files = await fs.readdir(basepath);
for(const item of files){
  let ext = item.split(".")[item.split(".").length - 1]; //accesses the last element of the array created after split
  if(ext != "js" && ext != "json" && item.split(".").length > 1){// no js files, no json files and no folders
    if(fsn.existsSync(path.join(basepath, ext))){
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
    }else{
      fs.mkdir(ext)
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
    }
  }
}