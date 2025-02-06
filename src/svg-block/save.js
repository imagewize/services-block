import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { svgUrl, width, height, backgroundColor, borderRadius, padding } = attributes;
    
    const blockProps = useBlockProps.save({
        style: {
            '--svg-width': `${width}px`,
            '--svg-height': `${height}px`,
            '--svg-background': backgroundColor,
            '--svg-border-radius': `${borderRadius}px`,
            '--svg-padding': `${padding}px`,
        }
    });

    return (
        <div {...blockProps}>
            {svgUrl && <img src={svgUrl} alt="" />}
        </div>
    );
}
