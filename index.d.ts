import { Configuration } from "webpack";

declare module 'webpack-analyze-preset' {
    export const setAnalyzerBundle: (config: Configuration) => Configuration;
}