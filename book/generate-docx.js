const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  PageBreak, TabStopType, TabStopPosition, LevelFormat, convertInchesToTwip,
  Header, Footer, PageNumber, NumberFormat, SectionType, ImageRun,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
} = require('docx');

// Read the complete manuscript
const manuscriptPath = '/home/z/my-project/book/10-complete-manuscript.md';
const manuscript = fs.readFileSync(manuscriptPath, 'utf-8');

// Split into lines
const lines = manuscript.split('\n');

// Figure mapping — all 55 figures
const figureMap = {
  'FPF-001': '/home/z/my-project/book/figures/fpf-001-gradient.png',
  'FPF-002': '/home/z/my-project/book/figures/fpf-002-hierarchy.png',
  'FPF-003': '/home/z/my-project/book/figures/fpf-003.png',
  'FPF-004': '/home/z/my-project/book/figures/fpf-004.png',
  'FPF-005': '/home/z/my-project/book/figures/fpf-005.png',
  'FPF-006': '/home/z/my-project/book/figures/fpf-006.png',
  'FPF-007': '/home/z/my-project/book/figures/fpf-007.png',
  'FPF-008': '/home/z/my-project/book/figures/fpf-008.png',
  'FPF-009': '/home/z/my-project/book/figures/fpf-009.png',
  'FPF-010': '/home/z/my-project/book/figures/fpf-005.png', // fallback
  'FPF-011': '/home/z/my-project/book/figures/fpf-011.png',
  'FPF-012': '/home/z/my-project/book/figures/fpf-005.png', // fallback
  'FPF-013': '/home/z/my-project/book/figures/fpf-013.png',
  'FPF-014': '/home/z/my-project/book/figures/fpf-014.png',
  'FPF-015': '/home/z/my-project/book/figures/fpf-015.png',
  'FPF-016': '/home/z/my-project/book/figures/fpf-016.png',
  'FPF-017': '/home/z/my-project/book/figures/fpf-017.png',
  'FPF-018': '/home/z/my-project/book/figures/fpf-018.png',
  'FPF-019': '/home/z/my-project/book/figures/fpf-019.png',
  'FPF-020': '/home/z/my-project/book/figures/fpf-020.png',
  'FPF-021': '/home/z/my-project/book/figures/fpf-021.png',
  'FPF-022': '/home/z/my-project/book/figures/fpf-022.png',
  'FPF-023': '/home/z/my-project/book/figures/fpf-023.png',
  'FPF-024': '/home/z/my-project/book/figures/fpf-024.png',
  'FPF-025': '/home/z/my-project/book/figures/fpf-025.png',
  'FPF-026': '/home/z/my-project/book/figures/fpf-026.png',
  'FPF-027': '/home/z/my-project/book/figures/fpf-027.png',
  'FPF-028': '/home/z/my-project/book/figures/fpf-028.png',
  'FPF-029': '/home/z/my-project/book/figures/fpf-029.png',
  'FPF-030': '/home/z/my-project/book/figures/fpf-030.png',
  'FPF-031': '/home/z/my-project/book/figures/fpf-031.png',
  'FPF-032': '/home/z/my-project/book/figures/fpf-032.png',
  'FPF-033': '/home/z/my-project/book/figures/fpf-005.png', // fallback
  'FPF-034': '/home/z/my-project/book/figures/fpf-034.png',
  'FPF-CM-01': '/home/z/my-project/book/figures/fpf-cm-01.png',
  'FPF-CM-02': '/home/z/my-project/book/figures/fpf-cm-02.png',
  'FPF-CM-03': '/home/z/my-project/book/figures/fpf-cm-03.png',
  'FPF-CM-04': '/home/z/my-project/book/figures/fpf-cm-04.png',
  'FPF-CM-05': '/home/z/my-project/book/figures/fpf-cm-05.png',
  'FPF-CM-06': '/home/z/my-project/book/figures/fpf-cm-06.png',
  'FPF-CM-07': '/home/z/my-project/book/figures/fpf-cm-07.png',
  'FPF-CM-08': '/home/z/my-project/book/figures/fpf-cm-08.png',
  'FPF-CM-09': '/home/z/my-project/book/figures/fpf-cm-09.png',
  'FPF-CM-10': '/home/z/my-project/book/figures/fpf-cm-10.png',
  'FPF-CM-11': '/home/z/my-project/book/figures/fpf-cm-11.png',
  'FPF-ES-02': '/home/z/my-project/book/figures/fpf-es-02.png',
  'FPF-ES-03': '/home/z/my-project/book/figures/fpf-es-03.png',
  'FPF-ES-04': '/home/z/my-project/book/figures/fpf-es-04.png',
  'FPF-ES-05': '/home/z/my-project/book/figures/fpf-es-05.png',
  'FPF-ES-06': '/home/z/my-project/book/figures/fpf-es-06.png',
  'FPF-ES-07': '/home/z/my-project/book/figures/fpf-es-07.png',
  'FPF-ES-08': '/home/z/my-project/book/figures/fpf-es-08.png',
  'FPF-ES-09': '/home/z/my-project/book/figures/fpf-es-09.png',
  'FPF-ES-10': '/home/z/my-project/book/figures/fpf-es-10.png',
  'FPF-ES-11': '/home/z/my-project/book/figures/fpf-es-11.png',
  'COMPARATIVE-MATRIX': '/home/z/my-project/book/figures/fpf-comparative-matrix.png',
  'CEI-ARCHITECTURE': '/home/z/my-project/book/figures/fpf-cei-architecture.png',
};

// Parse markdown and convert to docx paragraphs
const paragraphs = [];
let inFigurePlaceholder = false;
let figureId = '';
let figureBuffer = [];

function processLine(line) {
  // Skip empty lines
  if (line.trim() === '') {
    return null;
  }
  
  // Title (# )
  if (line.startsWith('# ') && !line.startsWith('## ')) {
    return new Paragraph({
      children: [new TextRun({ text: line.substring(2), bold: true, size: 32, font: 'Times New Roman' })],
      alignment: AlignmentType.CENTER,
      spacing: { before: 400, after: 400 },
    });
  }
  
  // Header 2 (## )
  if (line.startsWith('## ')) {
    return new Paragraph({
      heading: HeadingLevel.HEADING_2,
      children: [new TextRun({ text: line.substring(3), bold: true, size: 28, font: 'Times New Roman' })],
      spacing: { before: 400, after: 200 },
      pageBreakBefore: true,
    });
  }
  
  // Header 3 (### )
  if (line.startsWith('### ')) {
    return new Paragraph({
      heading: HeadingLevel.HEADING_3,
      children: [new TextRun({ text: line.substring(4), bold: true, size: 24, font: 'Times New Roman' })],
      spacing: { before: 300, after: 150 },
    });
  }
  
  // Header 4 (#### )
  if (line.startsWith('#### ')) {
    return new Paragraph({
      heading: HeadingLevel.HEADING_4,
      children: [new TextRun({ text: line.substring(5), bold: true, size: 22, font: 'Times New Roman' })],
      spacing: { before: 200, after: 100 },
    });
  }
  
  // Horizontal rule
  if (line.trim() === '---') {
    return new Paragraph({
      children: [new TextRun({ text: '' })],
      spacing: { before: 200, after: 200 },
    });
  }
  
  // Blockquote
  if (line.startsWith('> ')) {
    const text = line.substring(2);
    // Check for bold labels like **Key Insight:**
    const boldMatch = text.match(/^\*\*(.+?):\*\*\s*(.*)$/);
    if (boldMatch) {
      return new Paragraph({
        children: [
          new TextRun({ text: boldMatch[1] + ': ', bold: true, size: 22, font: 'Times New Roman', italics: true }),
          new TextRun({ text: boldMatch[2], size: 22, font: 'Times New Roman', italics: true }),
        ],
        indent: { left: convertInchesToTwip(0.5), right: convertInchesToTwip(0.5) },
        spacing: { before: 150, after: 150 },
        shading: { type: ShadingType.CLEAR, color: 'auto', fill: 'F5F5F5' },
      });
    }
    return new Paragraph({
      children: [new TextRun({ text: text, size: 22, font: 'Times New Roman', italics: true })],
      indent: { left: convertInchesToTwip(0.5), right: convertInchesToTwip(0.5) },
      spacing: { before: 150, after: 150 },
    });
  }
  
  // Bullet point
  if (line.startsWith('- ') || line.startsWith('* ')) {
    const text = line.substring(2);
    return new Paragraph({
      children: parseInlineFormatting(text),
      bullet: { level: 0 },
      spacing: { before: 60, after: 60 },
    });
  }
  
  // Numbered list
  const numMatch = line.match(/^(\d+)\.\s+(.*)$/);
  if (numMatch) {
    return new Paragraph({
      children: parseInlineFormatting(numMatch[2]),
      numbering: { reference: 'numbered-list', level: 0 },
      spacing: { before: 60, after: 60 },
    });
  }
  
  // Table row
  if (line.startsWith('|') && line.endsWith('|')) {
    // Skip table separator lines
    if (line.match(/^\|[\s\-:|]+\|$/)) {
      return null;
    }
    return null; // Tables handled separately
  }
  
  // Regular paragraph
  return new Paragraph({
    children: parseInlineFormatting(line),
    spacing: { before: 120, after: 120, line: 360 }, // 1.5x line spacing
    alignment: AlignmentType.JUSTIFIED,
  });
}

function parseInlineFormatting(text) {
  const runs = [];
  let current = '';
  let i = 0;
  
  while (i < text.length) {
    // Bold
    if (text.substring(i, i + 2) === '**') {
      if (current) {
        runs.push(new TextRun({ text: current, size: 22, font: 'Times New Roman' }));
        current = '';
      }
      const end = text.indexOf('**', i + 2);
      if (end !== -1) {
        runs.push(new TextRun({ text: text.substring(i + 2, end), bold: true, size: 22, font: 'Times New Roman' }));
        i = end + 2;
      } else {
        current += '**';
        i += 2;
      }
    }
    // Italic
    else if (text.substring(i, i + 1) === '*' && text.substring(i + 1, i + 2) !== '*') {
      if (current) {
        runs.push(new TextRun({ text: current, size: 22, font: 'Times New Roman' }));
        current = '';
      }
      const end = text.indexOf('*', i + 1);
      if (end !== -1) {
        runs.push(new TextRun({ text: text.substring(i + 1, end), italics: true, size: 22, font: 'Times New Roman' }));
        i = end + 1;
      } else {
        current += '*';
        i += 1;
      }
    }
    // Inline code
    else if (text.substring(i, i + 1) === '`') {
      if (current) {
        runs.push(new TextRun({ text: current, size: 22, font: 'Times New Roman' }));
        current = '';
      }
      const end = text.indexOf('`', i + 1);
      if (end !== -1) {
        runs.push(new TextRun({ text: text.substring(i + 1, end), size: 20, font: 'Courier New' }));
        i = end + 1;
      } else {
        current += '`';
        i += 1;
      }
    }
    else {
      current += text[i];
      i++;
    }
  }
  
  if (current) {
    runs.push(new TextRun({ text: current, size: 22, font: 'Times New Roman' }));
  }
  
  if (runs.length === 0) {
    runs.push(new TextRun({ text: text, size: 22, font: 'Times New Roman' }));
  }
  
  return runs;
}

// Process all lines
let i = 0;
while (i < lines.length) {
  const line = lines[i];
  
  // Check for figure placeholder blocks
  if (line.includes('[FIGURE PLACEHOLDER') || line.includes('[TABLE PLACEHOLDER') || line.includes('[PLACEHOLDER PAGE')) {
    // Extract figure ID - try multiple patterns
    let figId = null;
    
    // Try FPF-CM-xx, FPF-ES-xx patterns first
    const cmMatch = line.match(/FPF-CM-(\d+)/i);
    const esMatch = line.match(/FPF-ES-(\d+)/i);
    const numMatch = line.match(/FPF[-:]?(\d+)/i);
    
    if (cmMatch) {
      figId = `FPF-CM-${cmMatch[1].padStart(2, '0')}`;
    } else if (esMatch) {
      figId = `FPF-ES-${esMatch[1].padStart(2, '0')}`;
    } else if (numMatch) {
      figId = `FPF-${numMatch[1].padStart(3, '0')}`;
    }
    
    // Also check for text-based matches
    if (!figId) {
      if (line.includes('Comparative Matrix') || line.includes('COMPARATIVE MATRIX')) {
        figId = 'COMPARATIVE-MATRIX';
      } else if (line.includes('CEI Architecture') || line.includes('CEI ARCHITECTURE')) {
        figId = 'CEI-ARCHITECTURE';
      }
    }
    
    if (figId) {
      let imagePath = figureMap[figId];
      
      // Also check by content if no direct match
      if (!imagePath) {
        if (line.includes('Pillars') || line.includes('FIVE PILLARS FRAMEWORK')) {
          imagePath = figureMap['FPF-004'];
        } else if (line.includes('Gradient') || line.includes('PROCLAMATION-PROOF')) {
          imagePath = figureMap['FPF-001'];
        } else if (line.includes('Hierarchy') || line.includes('ACTIVITY-OUTPUT')) {
          imagePath = figureMap['FPF-002'];
        } else if (line.includes('Matrix') || line.includes('COMPARATIVE')) {
          imagePath = figureMap['COMPARATIVE-MATRIX'];
        } else if (line.includes('CEI')) {
          imagePath = figureMap['CEI-ARCHITECTURE'];
        }
      }
      
      if (imagePath && fs.existsSync(imagePath)) {
        const imageData = fs.readFileSync(imagePath);
        const imageExt = path.extname(imagePath).substring(1);
        
        paragraphs.push(new Paragraph({
          children: [new ImageRun({
            data: imageData,
            transformation: { width: 500, height: 281 },
            type: imageExt,
          })],
          alignment: AlignmentType.CENTER,
          spacing: { before: 200, after: 200 },
        }));
      }
      
      // Skip the visual specification block (until next --- or ## or ###)
      i++;
      while (i < lines.length && 
             !lines[i].startsWith('---') && 
             !lines[i].startsWith('## ') && 
             !lines[i].startsWith('### ') &&
             !lines[i].startsWith('**Placement**')) {
        i++;
      }
      // Skip a few more lines of specification
      while (i < lines.length && 
             (lines[i].startsWith('**') || lines[i].startsWith('-') || lines[i].trim() === '' || lines[i].startsWith('Cross-References'))) {
        i++;
      }
      continue;
    }
  }
  
  // Skip visual specification blocks
  if (line.startsWith('**Visual Specification**') || 
      line.startsWith('**Image Generation Prompt') ||
      line.startsWith('**Figure ID**') ||
      line.startsWith('**Title**') ||
      line.startsWith('**Type**') ||
      line.startsWith('**Chapter**') ||
      line.startsWith('**Purpose**') ||
      line.startsWith('**Key Concepts**') ||
      line.startsWith('**Layout Description**') ||
      line.startsWith('**Caption**') ||
      line.startsWith('**Placement**') ||
      line.startsWith('**Cross-References**') ||
      line.startsWith('**Image Generation Prompt**')) {
    i++;
    continue;
  }
  
  const para = processLine(line);
  if (para) {
    paragraphs.push(para);
  }
  i++;
}

// Create the document
const doc = new Document({
  styles: {
    default: {
      document: {
        run: {
          font: 'Times New Roman',
          size: 22, // 11pt
        },
        paragraph: {
          spacing: { line: 360 }, // 1.5x line spacing
        },
      },
    },
  },
  numbering: {
    config: [
      {
        reference: 'numbered-list',
        levels: [
          {
            level: 0,
            format: LevelFormat.DECIMAL,
            text: '%1.',
            alignment: AlignmentType.START,
            style: {
              paragraph: {
                indent: { left: convertInchesToTwip(0.5), hanging: convertInchesToTwip(0.25) },
              },
            },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: {
            width: convertInchesToTwip(6),  // 6x9 format
            height: convertInchesToTwip(9),
          },
          margin: {
            top: convertInchesToTwip(1),
            bottom: convertInchesToTwip(1),
            left: convertInchesToTwip(1),
            right: convertInchesToTwip(1),
          },
        },
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            children: [new TextRun({ text: 'The Five Pillars Framework', size: 18, font: 'Times New Roman', italics: true })],
            alignment: AlignmentType.CENTER,
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            children: [
              new TextRun({ text: 'Dr. Sayed Amir Mustafa Hashmi  |  Page ', size: 18, font: 'Times New Roman' }),
              new TextRun({ children: [PageNumber.CURRENT], size: 18, font: 'Times New Roman' }),
            ],
            alignment: AlignmentType.CENTER,
          })],
        }),
      },
      children: paragraphs,
    },
  ],
});

// Generate the document
Packer.toBuffer(doc).then((buffer) => {
  const outputPath = '/home/z/my-project/book/The-Five-Pillars-Framework.docx';
  fs.writeFileSync(outputPath, buffer);
  console.log(`Document generated: ${outputPath}`);
  console.log(`File size: ${(buffer.length / 1024).toFixed(2)} KB`);
  console.log(`Total paragraphs: ${paragraphs.length}`);
}).catch((err) => {
  console.error('Error generating document:', err);
  process.exit(1);
});
