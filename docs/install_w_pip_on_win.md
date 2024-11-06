## Local Installation for Windows

<img style="float: right; width: 100px; height: auto;" align="right" width=100 src="http://img4.wikia.nocookie.net/__cb20141027012809/simpsons/images/8/8e/Bill_Gates.png">

### Prerequisites:

- python3
- venv (```pip install venv```)
- Check the python installation by typing ```python --version``` in CMD (Command Prompt).
- Alternatively you can execute a selected code from the "raw_code" folder like below:
```bat
python -i .\raw_codes\exr2\exr2_step2.py
```
  - TIP: Type ```quit()``` to exit from the current python shell.

### Installation:

- (1) Download the ZIP file from the [github repository](https://github.com/muratkendir/dist-gis-exercises) and extract the contents into a folder. Than simply change the directory to the extracted one:
```bat
cd  C:\Users\USERNAME\EXTRACTED_FOLDER
```
- (2) Create a python environment as "myenv" or just use a custom name:
```bat
python -m venv myenv
```
- (Checkpoint 1) Check the "myenv" by listing it's contents:
```bat
dir myenv
dir myenv\Scripts
```
- (3) Activate the environment (Environment name should appear on the left):
```bat
.\myenv\Scripts\activate.bat
```
  - TIP: Type ```.\myenv\Scripts\deactivate.bat``` to deactivate the current environment and turn back to the base.
- (Checkpoint) Check the list of required python libraries:
```bat
type requirements.txt
```
- (4) Install the required libraries:
```bat
pip install --requirement requirements.txt
```
- (5) Install the Jupyter Notebook using pip command:
```bat
pip install notebook
```
- (6) Run the Jupyter Notebook and visit the locally hosted site (localhost:8888) after that:
```bat
jupyter notebook
```
  - TIP: Press Ctrl+C to shut down the current Jupyter session.
- (7) Find the file with IPYNB extension and double click on it.
  - To edit a cell (A block may contain code or makrdown document) double click on it
  - To run a cell press Ctrl+Enter
  - To swtich the content type of the cell use the dropdown menu on the top menu.