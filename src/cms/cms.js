import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import IndexPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/AboutPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("index", ProductPagePreview);
CMS.registerPreviewTemplate("index", BlogPostPreview);
CMS.registerPreviewTemplate("index", AboutPagePreview);
