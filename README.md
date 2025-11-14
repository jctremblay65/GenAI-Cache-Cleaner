# GenAI Cache Cleaner for Adobe Illustrator

A powerful utility script for Adobe Illustrator that helps you manage and clean up GenAI cache folders, freeing up valuable disk space.

## Overview

GenAI Cache Cleaner is an ExtendScript utility for Adobe Illustrator that automatically locates and allows you to delete cached data from Illustrator's Generative AI features. Over time, these cache folders can accumulate hundreds of megabytes or even gigabytes of data. This script provides an easy-to-use interface to identify, review, and delete these caches safely.

## Features

- **Automatic Detection**: Automatically locates your Illustrator preferences folder across different versions, channels (Stable/Beta/Prerelease), and platforms (macOS/Windows)
- **Visual Overview**: Displays all GenAI cache folders with their sizes and item counts at a glance
- **Selective Deletion**: Choose which cache folders to delete with checkbox selection
- **Safety First**: Provides detailed confirmation dialogs before any deletion occurs
- **Cross-Platform**: Works seamlessly on both macOS and Windows
- **Version Aware**: Automatically detects Illustrator version and adjusts folder paths accordingly
- **Quick Navigation**: Click on folder names to open them directly in your file explorer
- **Real-time Updates**: Automatically refreshes folder sizes after deletion

## Supported GenAI Features

The script manages cache folders for the following Adobe Illustrator Generative AI features:

- **GenAIImageToCaption**: Image-to-caption generation cache
- **GenAITextToVectors**: Text-to-vector graphics generation cache
- **GenAIRotateVector**: Vector rotation AI cache
- **GenAIRecolor**: AI-powered recoloring cache
- **GenAIPatterns**: Pattern generation cache
- **GenAIMultiDiffusion**: Multi-diffusion model cache

## System Requirements

- **Adobe Illustrator**: Version 2024 or later (any version with GenAI features)
- **Operating System**: macOS or Windows
- **Channels Supported**: Stable, Beta, and Prerelease builds
- **Permissions**: Write access to Illustrator preferences folder

## Installation

### Method 1: Direct Installation

1. Download the `GenAI Cache Cleaner 1.2.jsx` file from this repository
2. Copy it to your Illustrator Scripts folder:
   - **macOS**: `/Applications/Adobe Illustrator [Version]/Presets/[Language]/Scripts/`
   - **Windows**: `C:\Program Files\Adobe\Adobe Illustrator [Version]\Presets\en_US\Scripts\`

### Method 2: Run from Any Location

1. Download the `GenAI Cache Cleaner 1.2.jsx` file
2. In Illustrator, go to **File > Scripts > Other Script...**
3. Navigate to the downloaded file and select it

## Usage

### Running the Script

1. **From the Scripts Menu** (if installed):
   - Open Adobe Illustrator
   - Go to **File > Scripts > GenAI Cache Cleaner 1.2**

2. **From File Browser**:
   - Open Adobe Illustrator
   - Go to **File > Scripts > Other Script...**
   - Select the `GenAI Cache Cleaner 1.2.jsx` file

### Using the Interface
![GenAI Cache Cleaner UI](genAI.png).
The script will open a dialog window displaying:

1. **Preferences Path**: Shows the location of your Illustrator preferences folder
2. **Cache Folders List**: Each GenAI cache folder with:
   - Folder name
   - Number of items (in parentheses)
   - Total size in MB
   - Checkbox for selection
   - Clickable name to open folder in file explorer
3. **Total Size**: Sum of all GenAI cache folders
4. **Action Buttons**:
   - **Delete Selected**: Remove checked cache folders
   - **Open Prefs**: Open the preferences folder in file explorer
   - **Close**: Exit the script

### Step-by-Step Cleanup

1. **Review**: Examine the list of cache folders and their sizes
2. **Select**: Check the boxes next to folders you want to delete
3. **Confirm**: Click "Delete Selected"
4. **Verify**: Review the confirmation dialog showing what will be deleted
5. **Executez**: Confirm to proceed with deletion
6. **Results**: View the deletion report showing files and folders removed

## Understanding the Display

```
GenAITextToVectors (45) 234.5 MB
```

- `GenAITextToVectors`: Cache folder name
- `(45)`: Number of subfolders/items
- `234.5 MB`: Total size on disk

Grayed out entries indicate empty or non-existent folders.

## How It Works

### Folder Detection

The script uses a sophisticated multi-step approach to locate your Illustrator preferences:

1. **Version Detection**: Extracts major.minor version from `app.version` (e.g., "30.1")
2. **Channel Detection**: Identifies if running Stable, Beta, or Prerelease build
3. **Path Construction**: Tries multiple naming patterns:
   - `Adobe Illustrator 30.1 Settings`
   - `Adobe Illustrator 30.1 Beta Settings`
   - `Adobe Illustrator 30.1 Prerelease Settings`
4. **Locale Support**: Checks for locale-specific folders (en_US, en_GB, etc.)
5. **Platform-Specific Paths**:
   - **macOS**: `~/Library/Preferences/Adobe Illustrator [version] Settings/`
   - **Windows**: `%APPDATA%\Adobe\Adobe Illustrator [version] Settings\`

### Safe Deletion

The script implements recursive deletion with error handling:

- Traverses all subfolders and files
- Attempts to delete files before folders
- Tracks success/failure for each operation
- Reports detailed results including any errors
- Preserves preferences folder structure

## Troubleshooting

### Cache Folders Reappear

This is normal behavior. Illustrator recreates cache folders as you use GenAI features. Run the cleaner periodically to manage disk space.

## Technical Details

### File Format
- **Language**: ExtendScript (Adobe's extended JavaScript)
- **Compatibility**: Illustrator CC 2024 and later

### Cache Folder Locations

**macOS:**
```
~/Library/Preferences/Adobe Illustrator [version] Settings/[locale]/GenAI*/
```

**Windows:**
```
%APPDATA%\Adobe\Adobe Illustrator [version] Settings\[locale]\GenAI*\
```

## FAQ

**Q: Will this delete my Illustrator settings or preferences?**
A: No, it only deletes GenAI cache folders. Your artboards, swatches, brushes, and other preferences remain untouched.

**Q: Do I need to restart Illustrator after cleaning?**
A: No.

**Q: How much space can I expect to free up?**
A: Varies by usage. Heavy GenAI users may free 500MB-2GB or more.

**Q: Can I run this on multiple Illustrator versions?**
A: Yes, run the script from each version to clean its specific caches.

**Q: Is it safe to delete all cache folders?**
A: Yes, these are temporary cache files.

## Version History

### Version 1.2 (Current)
- Enhanced version detection using major.minor format
- Improved support for Beta and Prerelease channels
- Better cross-platform folder detection
- Optimized UI with clickable folder names
- Improved error handling and reporting

### Version 1.1
- Added multi-locale support
- Enhanced folder statistics
- Improved deletion confirmation dialog

### Version 1.0
- Initial release
- Basic cache detection and deletion
- Simple UI interface

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Created by [jctremblay65](https://github.com/jctremblay65)
Jean-Claude Tremblay - Services Proficiografik

## Acknowledgments

- Adobe Illustrator team for creating the GenAI features
- ExtendScript community for documentation and support

## Disclaimer

This script is provided as-is without warranty. While designed to be safe, always ensure you have backups of important data. The author is not responsible for any data loss or issues arising from the use of this script.

---

**Need Help?** Open an issue on [GitHub](https://github.com/jctremblay65/GenAI-Cache-Cleaner/issues)

**Like this tool?** Give it a star on GitHub!
