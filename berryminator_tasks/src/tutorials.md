<!-- <center><img src="http://mooc.e-yantra.org/img/eYantra_logo.svg" alt="e-yantra_logo" style="scale:75%;" /></center> -->

<style>
.back{
	position: fixed;
	width: 250px;
	height: 250px;
	top: 50%;
	left: 50%;
    margin-top: auto; 
    margin-left: auto; 
	opacity: 0.15;
    z-index: -1;
	}
</style>


<!-- <img src="http://mooc.e-yantra.org/img/EyantraLogoMini.png" class="back"> -->

<center>
    <h1>Task 0</h1>
    <h1>Learning Resources / Tutorials</h1>
</center>




---

</br>

This document contains links for the Tutorials on:

- Python language
- Image Processing using OpenCV-Python, NumPy, Matplotlib
- Lua language

It also covers a basic tutorial on Linux for reference.

> **Note:** The Linux tutorial is intended **only** for teams using Ubuntu OS.

<!-- toc -->

<br/>

---

## A. Python

- These tutorials are provided in the format of **Jupyter Notebooks** OR **.ipynb** files  embedded in a **.zip** file named, **[python_tutorials.zip](./task0_files/tutorials/python_tutorials.zip)**.

- So, you can learn the syntax, edit them and try out at your end easily.

- Download these tutorials for various topics listed in the Table below. Right-click on the above hyperlink and select **Save Link As...** option to download.

  |  #   |         Topic          |       Jupyter Notebook Filename       |
  | :--: | :--------------------: | :-----------------------------------: |
  |  1   |    Getting Started     |    **`01_Getting_started.ipynb`**     |
  |  2   |       Data types       |       **`02_Data_types.ipynb`**       |
  |  3   |        Strings         |        **`03_Strings.ipynb`**         |
  |  4   | Mathematical Operators | **`04_Mathematical_operators.ipynb`** |
  |  5   | Conditional Statements | **`05_Conditional_statements.ipynb`** |
  |  6   |         Loops          |         **`06_Loops.ipynb`**          |
  |  7   |         Tuples         |         **`07_Tuple.ipynb`**          |
  |  8   |         Lists          |         **`08_Lists.ipynb`**          |
  |  9   |       Dictionary       |         **`09_Dicts.ipynb`**          |
  |  10  |       Functions        |       **`10_Functions.ipynb`**        |
  |  11  |        Modules         |        **`11_Modules.ipynb`**         |

<br/>

- An **`12_Exercise.ipynb`** file is also provided for practice. Kindly note this exercise is **not graded**.
- To view and learn from these tutorials, open **Terminal** or **Anaconda Prompt** and navigate to the directory where these files are present.
- Activate the Conda environment and run the command: **`jupyter notebook`**.
- As explained in **[Section 2C](./software_installation_ubuntu.html#c-using-the-packages-and-tools)** of Software Installation document, this command will open the Notebook server in your default browser and you will be able to view the downloaded **.ipynb** files.

<br/>

---

## B. OpenCV, NumPy, Matplotlib

- You need to learn the following basic image processing techniques using OpenCV-Python, NumPy and Matplotlib from the below provided tutorial links.

  - Reading an image, displaying it and saving it back
  - Reading a video, displaying it and saving it back
  - Capture images from camera and displaying them
  - Writing video to a file
  - Drawing different geometric shapes
  - Image properties, splitting and merging images
  - Arithmetic and Logical operations on images like addition, subtraction, bitwise operations, etc.
  - Converting images from one color-space to another, like BGR-to-Gray, BGR-to-HSV, etc.
  - Extract or mask object of particular color in given image

- Learn about these various concepts from the Image Processing, NumPy and Matplotlib tutorials provided officially by **OpenCV**, **CS231N** course at **Stanford University** and from the ones created by **e-Yantra** team.

  - Tutorials by **OpenCV**:
    - <a href="http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_setup/py_intro/py_intro.html" target="_blank">Introduction to OpenCV</a>
    - <a href="http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_gui/py_table_of_contents_gui/py_table_of_contents_gui.html" target="_blank">GUI features in OpenCV</a>
    - [Core Operations - Basic and Arithmetic Operations on Images](http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_core/py_table_of_contents_core/py_table_of_contents_core.html)
    - [Image Processing in OpenCV - Changing Colorspaces, Image Thresholding, Contours in OpenCV](https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_table_of_contents_imgproc/py_table_of_contents_imgproc.html)

  - Tutorials from **CS231N course**:
    - <a href="https://cs231n.github.io/python-numpy-tutorial/#python" target="_blank">Python language</a>
    - <a href="https://cs231n.github.io/python-numpy-tutorial/#numpy" target="_blank">NumPy</a>
    - <a href="https://cs231n.github.io/python-numpy-tutorial/#matplotlib" target="_blank">Matplotlib</a>

  - Tutorials by **e-Yantra** team:

    - These tutorials are provided in the format of **Jupyter Notebooks** OR **.ipynb** files embedded in a **.zip** file named, **[opencv_tutorials.zip](./task0_files/tutorials/opencv_tutorials.zip)**.

    - Download these tutorials for various topics listed in the Table below. Right-click on the above hyperlink and select **Save Link As...** option to download.

      |  #   |               Topic               |          Jupyter Notebook Filename           |
      | :--: | :-------------------------------: | :------------------------------------------: |
      |  1   |      Introduction to OpenCV       |        **`01_Intro_to_OpenCV.ipynb`**        |
      |  2   |       Introduction to NumPy       |        **`02_Intro_to_NumPy.ipynb`**         |
      |  3   |    Introduction to Matplotlib     |      **`03_Intro_to_Matplotlib.ipynb`**      |
      |  4   |           Color Models            |         **`04_Color_Models.ipynb`**          |
      |  5   |        2D Transformations         |      **`05_2D_Transformations.ipynb`**       |
      |  6   | Arithmetic and Logical Operations | **`06_Arithmetic_Logical_Operations.ipynb`** |
      |  7   |            Historgram             |           **`07_Histogram.ipynb`**           |

<br/>

---

## C. Lua

- Follow these links to learn about Lua syntax and basics.
  - <a href="https://www.tutorialspoint.com/lua/index.htm" target="_blank">Lua Tutorial - Tutorialspoint</a>
  - <a href="http://tylerneylon.com/a/learn-lua/" target="_blank">Learn Lua in 15 Minutes</a>
  - <a href="https://www.youtube.com/watch?v=iMacxZQMPXs" target="_blank">Learn Lua in One Video</a>
  - <a href="http://www.newthinktank.com/2015/06/learn-lua-one-video/" target="_blank">Cheat Sheet from the above video</a>
  - <a href="http://www.lua.org/pil/contents.html" target="_blank">Official Programming in Lua eBook</a>
  
- You can use any editor to write and practice **Lua** syntax. We suggest to use <b><a href="https://repl.it" target="_blank">Repl.it</a></b> online IDE, which has support for many languages.


<br/>

---

## D. Linux

- **NOTE:** This tutorial is intended **only** for teams using Ubuntu OS.
- A tutorial covering the basics of Linux is created by **e-Yantra**. Download it from <a href="./task0_files/tutorials/Linux_Tutorials.pdf" target="_blank">here</a>.

<br/>

---