# File Path Inserter

**File Path Inserter** is a tool designed to automatically insert the file path as a comment at the top of your code files. This tool supports multiple file types and can be easily integrated into your development environment with a customizable keybinding.

## Features

- **Supports Multiple File Types**: Detects file types and uses appropriate comment syntax.
- **Customizable Keybinding**: Easily configure keybindings in VSCode.
- **No Additional Project Configuration Required**: Simple setup and usage across all projects.

## Supported Languages and Tools

The File Path Inserter supports the following languages and tools:

- **JavaScript (.js)**
- **TypeScript (.ts)**
- **C++ (.cpp)**
- **Java (.java)**
- **C# (.cs)**
- **Go (.go)**
- **PHP (.php)** - Note: Special handling for PHP files with `<?php` tag.
- **Python (.py)**
- **Shell (.sh)**
- **Ruby (.rb)**
- **Perl (.pl)**
- **YAML (.yml, .yaml)**
- **Environment Files (.env)**
- **TOML (.toml)**
- **HTML (.html)**
- **XML (.xml)**
- **CSS (.css)**
- **SCSS (.scss)**

## Installation

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

### Setup Instructions

1. **Clone the Repository**

   Open a terminal and run:

   ```sh
   git clone https://github.com/umaarov/file-path-inserter.git
   cd file-path-inserter
   ```
2.  **Place the Script**
    * Save the `insertFilePath.js` script to a directory of your choice. For example:
    * Windows: `C:/scripts/insertFilePath.js`
    * macOS/Linux: `/usr/local/bin/insertFilePath.js`
3.  **Configure Keybinding in VSCodet**
    * Open VSCode.
    * Go to `File > Preferences > Keyboard Shortcuts`.
    * Click on the `{}` icon at the top right to open `keybindings.json`.
    * Add the following keybinding configuration:
    * ```sh
      [
        {
          "key": "ctrl+alt+i",
          "command": "workbench.action.terminal.sendSequence",
          "args": {
            "text": "node C:/scripts/insertFilePath.js ${file}\u000D"
           },
          "when": "editorTextFocus"
        }
      ]]
    * Adjust the path (`C:/scripts/insertFilePath.js`) to where you saved the script.

## Usage
1. **Open a File** in VSCode.
2. **Press the Keybinding**: `Ctrl+Alt+I` (or the keybinding you configured).
3. **Verify the File**: The file path should be inserted as a comment at the top of the file.

### Example Output
For a JavaScript file, the comment will look like this:
``` sh
// C:/path/to/your/file.js
```
For a PHP file, if the file starts with `<?php`, the comment will be:
``` sh
<!-- C:/path/to/your/file.php -->
```
## Contributing
We welcome contributions! If you’d like to contribute, please:
1. **Fork the Repository**: Click the "Fork" button on GitHub.
2. **Create a New Branch**: For your changes, run:
   ```sh
   git checkout -b your-branch-name
   ```
3. **Make Your Changes**: Edit files and test your changes.
4. **Submit a Pull Request**: Push your branch to your forked repository and open a pull request.

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
### Contact
For any questions or support, please contact hs.umarov21@gmail.com.



