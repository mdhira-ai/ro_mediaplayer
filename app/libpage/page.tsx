"use client";

import { Button } from "@/components/ui/button";
import { ArrowBigLeft, Folder } from "lucide-react";
import * as path from "@tauri-apps/api/path";
import { useEffect } from "react";
import { readDir, BaseDirectory } from "@tauri-apps/plugin-fs";

import { useState } from "react";

interface Entry {
  isDirectory?: boolean;
  name?: string;
}

export default function Page() {
  const [homepath, sethomepath] = useState("");

  const [listdir, setlistdir] = useState<Entry[]>();
  const [currentPath, setcurrentPath] = useState("");

  useEffect(() => {
    async function gethomepath() {
      const home = await path.videoDir();
      sethomepath(home);
      const entries = await readDir("", {
        baseDir: BaseDirectory.AppLocalData,
      });
      setlistdir(entries);
      console.log(entries);
    }

    gethomepath();
  }, []);

  async function loaddir(path: string) {
    try {
      const rawpath = await readDir(path);
      console.log(rawpath);
      setlistdir(rawpath);
      setcurrentPath(path);
    } catch (e) {
      console.log(e);
    }
  }

  function navigatetofolder(entry: Entry) {
    console.log(entry);
    if (!entry.isDirectory) return;
    const next = `${currentPath}/${entry.name}`;
    loaddir(next);
  }

  return (
    <div className="bg-[#0F172B] h-dvh flex flex-col p-5 items-start gap-3 ">
      <div className="flex flex-row justify-center items-center gap-2">
        <Button variant={"outline"} size={"icon-lg"}>
          <ArrowBigLeft />
        </Button>
        <span className="bg-slate-700 text-slate-100 p-3 select-none">
          {homepath}
        </span>
      </div>

      <div className="flex flex-row gap-5">
        {listdir?.map((s, index) => (
          <Button
            variant={"outline"}
            key={index}
            onClick={() => navigatetofolder(s)}
            className="flex flex-col justify-center  hover:bg-slate-700 w-30 h-30 items-center  rounded-md p-2"
          >
            <Folder />
            <span className="select-none">{s?.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
