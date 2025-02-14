import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
    BlockControls,
    withColors,
    __experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
    __experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients
} from '@wordpress/block-editor';
import {
    ToolbarGroup, 
    ToolbarButton,
    PanelBody,
    RangeControl,
    Button,
    TextControl
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { MediaUpload } from '@wordpress/media-utils';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

import './editor.scss';

const Edit = compose(
    withColors('backgroundColor'),
    withSelect((select) => ({
        colors: select('core/block-editor').getSettings()?.colors || []
    }))
)(function({ attributes, setAttributes, backgroundColor, setBackgroundColor, clientId }) {
    const { svgUrl, width, height, borderRadius, padding } = attributes;
    const [error, setError] = useState('');
    const colorGradientSettings = useMultipleOriginColorsAndGradients();

    const onSelectSVG = (media) => {
        if (media.mime !== 'image/svg+xml') {
            setError('Please select an SVG file');
            return;
        }
        setError('');
        setAttributes({ svgUrl: media.url });
    };

    const onBackgroundColorChange = (color) => {
        setAttributes({ backgroundColor: color });
    };

    const blockProps = useBlockProps({
        style: {
            backgroundColor: attributes.backgroundColor,
            '--svg-background': attributes.backgroundColor,
            '--svg-width': `${width}px`,
            '--svg-height': `${height}px`,
            '--svg-border-radius': `${borderRadius}px`,
            '--svg-padding': `${padding}px`
        }
    });

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <MediaUpload
                        onSelect={onSelectSVG}
                        allowedTypes={['image/svg+xml']}
                        render={({ open }) => (
                            <ToolbarButton
                                onClick={open}
                                icon="upload"  // Using WordPress dashicon
                                label={svgUrl ? __('Replace SVG') : __('Upload SVG')}
                            />
                        )}
                    />
                </ToolbarGroup>
            </BlockControls>
            
            <InspectorControls group="color">
                <ColorGradientSettingsDropdown
                    panelId={clientId}
                    settings={[{
                        label: __('Container Background'),
                        colorValue: attributes.backgroundColor,
                        onColorChange: onBackgroundColorChange
                    }]}
                    {...colorGradientSettings}
                />
            </InspectorControls>

            <InspectorControls>
                <PanelBody title={__('SVG Settings')} initialOpen={true}>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    
                    <RangeControl
                        label={__('SVG Width (px)')}
                        value={width}
                        onChange={(value) => setAttributes({ width: value })}
                        min={20}
                        max={200}
                    />
                    
                    <RangeControl
                        label={__('SVG Height (px)')}
                        value={height}
                        onChange={(value) => setAttributes({ height: value })}
                        min={20}
                        max={200}
                    />
                </PanelBody>

                <PanelBody title={__('Container Settings')} initialOpen={true}>
                    <RangeControl
                        label={__('Padding (px)')}
                        value={padding}
                        onChange={(value) => setAttributes({ padding: value })}
                        min={0}
                        max={50}
                    />
                    
                    <RangeControl
                        label={__('Border Radius (px)')}
                        value={borderRadius}
                        onChange={(value) => setAttributes({ borderRadius: value })}
                        min={0}
                        max={50}
                    />
                </PanelBody>
            </InspectorControls>
            
            <div {...blockProps}>
                {svgUrl ? (
                    <img 
                        src={svgUrl} 
                        alt=""
                    />
                ) : (
                    <p>{__('Upload an SVG')}</p>
                )}
            </div>
        </>
    );
});

export default Edit;
