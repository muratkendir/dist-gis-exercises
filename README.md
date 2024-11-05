# dist-gis-exercises

Run the Python Notebook via Binder:

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/muratkendir/dist-gis-exercises/main)

## Local Installation for Windows

<img style="float: right; width: 100px; height: auto;" src="http://img4.wikia.nocookie.net/__cb20141027012809/simpsons/images/8/8e/Bill_Gates.png">

### Prerequirements:

- python3
- venv (```pip install venv```)
- Check the python installation by typing ```python --version``` in CMD (Command Prompt).
- Alternatively you can execute a selected code from the "raw_code" folder like below:
```bash
python -i .\raw_codes\exr2\exr2_step2.py
```
  - TIP: Type ```quit()``` to exit from the current python shell.

### Installation:

- (1) Download the ZIP file from the [github repository](https://github.com/muratkendir/dist-gis-exercises) and extract the contents into a folder. Than simply change the directory to the extracted one:
```bash
cd  C:\Users\USERNAME\EXTRACTED_FOLDER
```
- (2) Create a python environment as "myenv" or just use a custom name:
```bash
python -m venv myenv
```
- (Checkpoint 1) Check the "myenv" by listing it's contents:
```bash
dir myenv
dir myenv\Scripts
```
- (3) Activate the environment (Environment name should appear on the left):
```bash
.\myenv\Scripts\activate.bat
```
  - TIP: Type ```.\myenv\Scripts\deactivate.bat``` to deactivate the current environment and turn back to the base.
- (Checkpoint) Check the list of required python libraries:
```bash
type requirements.txt
```
- (4) Install the required libraries:
```bash
pip install --requirement requirements.txt
```
- (5) Install the Jupyter Notebook using pip command:
```bash
pip install notebook
```
- (6) Run the Jupyter Notebook and visit the locally hosted site (localhost:8888) after that:
```bash
jupyter notebook
```
  - TIP: Press Ctrl+C to shut down the current Jupyter session.

## Local installation for Linux:

<img style="float: right; width: 100px; height: auto;" src="https://seeklogo.com/images/L/linux-logo-704D6BB91C-seeklogo.com.png">

### Prerequirements:

- git
- python3
- venv (```pip install venv```)
- Check the python installation by typing ```python3 --version``` in Terminal (Command Line Interface).
- Alternatively you can execute a selected code from the "raw_code" folder like below:
```bash
python3 --interactive raw_codes/exr2/exr2_step2.py
```
  - TIP: Type ```quit()``` to exit from the current python shell.

### Installation:

- (1) Go to your home directory and copy the github repository to your computer in Terminal:
```bash
cd ~
git clone https://github.com/muratkendir/dist-gis-exercises.git
```
- (2) Go into the downloaded directory:
```bash
cd dist-gis-exercises
```
- (3) Create a python environment as "myenv" or just use a custom name:
```bash
python3 -m venv myenv
```
- (4) Check the "myenv" by listing it's contents:
```bash
ls myenv
ls myenv/bin
```
- (5) Activate the environment (Environment name should appear on the left):
```bash
source myenv/bin/activate
```
  - TIP: Type only ```deactivate``` to exit from the current environment and turn back to the base.
- (6) Check the list of required python libraries:
```bash
cat requirements.txt
```
- (7) Install the required libraries:
```bash
pip install --requirement requirements.txt
```
- (8) Install the Jupyter Notebook using pip command:
```bash
pip install notebook
```
- (9) Run the Jupyter Notebook and visit the locally hosted site (localhost:8888) after that:
```bash
jupyter notebook
```
  - TIP: Press Ctrl+C to shut down the current Jupyter session.
- (10) (Optional) If you want to check libraries, classes or built-ins, it is recommended to use bpython. Install bpython via pip:
```bash
pip install bpython
```
  - TIP: Type ```Exit()``` to close current bpython session.