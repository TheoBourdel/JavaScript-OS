import { Calculatrice } from "../sources/app/calculatrice";
import { Horloge } from "../sources/app/horloge";
import { Tic } from "../sources/app/tic";

export const allApps = [
    {
        id:"file-manager",
        name:"File manager",
        directoryLink:"",
        image:"assets/images/apps/file-manager.png",
        htmlCompnent: ''
    },
    {
        id:"recycle-bin",
        name:"Recycle bin",
        directoryLink:"",
        image:"assets/images/apps/recycle-bin.png",
        htmlCompnent: ''
    },
    {
        id:"settings",
        name:"Settings",
        directoryLink:"",
        image:"assets/images/apps/settings.png",
        htmlCompnent: ''
    },
    {
        id:"system-info",
        name:"System Info",
        directoryLink:"",
        image:"assets/images/apps/system-information.png",
        htmlCompnent: ''
    },
    {
        id:"tic_tac_toe",
        name:"Tic Tac Toc",
        directoryLink:"apps/Tic/",
        image:"assets/images/apps/tic.png",
        htmlCompnent: Tic
    },
    {
        id:"clock",
        name:"Clock",
        directoryLink:"apps/Horloge/",
        image:"assets/images/apps/clock.png",
        htmlCompnent: Horloge
    },
    {
        id:"calculator",
        name:"Calculatrice",
        directoryLink:"apps/Calculatrice/",
        image:"assets/images/apps/calculator.png",
        htmlCompnent: Calculatrice
    },
]