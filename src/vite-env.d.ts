/// <reference types="vite/client" />

declare module "*.svg" {
    const content: React.FC<React.SVGProps<SVGElement>>;
    export default content;
}

declare module "@/assets";
declare module "@/components";
declare module "@/layouts";
declare module "@/modules";
declare module "@/routes";
declare module "@/types";
declare module "@/data";
declare module "@/utils";
declare module "@/hooks";
