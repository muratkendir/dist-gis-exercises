# Local installation for Linux:

<img style="float:right; width:100px; height:auto;" align="right" width=100 src="https://vignette.wikia.nocookie.net/penguinsofmadagascar/images/f/f5/Kowalski_(2).png/revision/latest?cb=20180425080533">

## Prerequisites:

- git
- python3
- venv (```pip install venv```)
- Check the python installation by typing ```python3 --version``` in Terminal (Command Line Interface).
- Alternatively you can execute a selected code from the "raw_code" folder like below:
```bash
python3 --interactive raw_codes/exr2/exr2_step2.py
```
  - TIP: Type ```quit()``` to exit from the current python shell.

## Installation:

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
- (Checkpoint) Check the "myenv" by listing it's contents:
```bash
ls myenv
ls myenv/bin
```
- (4) Activate the environment (Environment name should appear on the left):
```bash
source myenv/bin/activate
```
  - TIP: Type only ```deactivate``` to exit from the current environment and turn back to the base.
- (Checkpoint) Check the list of required python libraries:
```bash
cat requirements.txt
```
- (5) Install the required libraries:
```bash
pip install --requirement requirements.txt
```
- (6) Install the Jupyter Notebook using pip command:
```bash
pip install notebook
```
- (7) Run the Jupyter Notebook and visit the locally hosted site (localhost:8888) after that:
```bash
jupyter notebook
```
  - TIP: Press Ctrl+C to shut down the current Jupyter session.
- (8) Find the file with IPYNB extension and double click on it.
  - To edit a cell (A block may contain code or makrdown document) double click on it
  - To run a cell press Ctrl+Enter
  - To swtich the content type of the cell use the dropdown menu on the top menu. 
- (9) (Optional) If you want to check libraries, classes or built-ins, it is recommended to use bpython. Install bpython via pip:
```bash
pip install bpython
```
  - TIP: Type ```Exit()``` to close current bpython session.