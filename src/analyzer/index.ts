import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// @ts-ignore
import DashboardPlugin from 'webpack-dashboard/plugin';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
// @ts-ignore
import SizePlugin from 'size-plugin';
import { Configuration } from 'webpack';

const smp = new SpeedMeasurePlugin();
export const setAnalyzerBundle = (config: Configuration) => smp.wrap({
    ...config,
    plugins: [
        ...(config.plugins || []),
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true
        }),
        new DashboardPlugin(),
        new SizePlugin()
    ]
});