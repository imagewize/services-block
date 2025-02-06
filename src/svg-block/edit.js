import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
    BlockControls
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

// Fix the import path to use the editor scss file directly
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { svgUrl, width, height, backgroundColor, borderRadius, padding } = attributes;
    const [error, setError] = useState('');

    const onSelectSVG = (media) => {
        if (media.mime !== 'image/svg+xml') {
            setError('Please select an SVG file');
            return;
        }
        setError('');
        setAttributes({ svgUrl: media.url });
    };

    const blockProps = useBlockProps({
        style: {
            backgroundColor,
            borderRadius: `${borderRadius}px`,
            padding: `${padding}px`,
            width: `${width}px`,
            height: `${height}px`,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
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
                                icon="replace"
                                label={__('Replace SVG')}
                            />
                        )}
                    />
                </ToolbarGroup>
            </BlockControls>
            
            <InspectorControls>
                <PanelBody title={__('SVG Settings')}>
                    <MediaUpload
                        onSelect={onSelectSVG}
                        allowedTypes={['image/svg+xml']}
                        render={({ open }) => (
                            <Button 
                                onClick={open}
                                variant="primary"
                            >
                                {svgUrl ? 'Replace SVG' : 'Upload SVG'}
                            </Button>
                        )}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    
                    <RangeControl
                        label={__('Width (px)')}
                        value={width}
                        onChange={(value) => setAttributes({ width: value })}
                        min={20}
                        max={200}
                    />
                    
                    <RangeControl
                        label={__('Height (px)')}
                        value={height}
                        onChange={(value) => setAttributes({ height: value })}
                        min={20}
                        max={200}
                    />
                    
                    <TextControl
                        label={__('Background Color')}
                        value={backgroundColor}
                        onChange={(value) => setAttributes({ backgroundColor: value })}
                        type="color"
                    />
                    
                    <RangeControl
                        label={__('Border Radius (px)')}
                        value={borderRadius}
                        onChange={(value) => setAttributes({ borderRadius: value })}
                        min={0}
                        max={50}
                    />
                    
                    <RangeControl
                        label={__('Padding (px)')}
                        value={padding}
                        onChange={(value) => setAttributes({ padding: value })}
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
                        style={{ 
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                ) : (
                    <p>{__('Upload an SVG')}</p>
                )}
            </div>
        </>
    );
}
