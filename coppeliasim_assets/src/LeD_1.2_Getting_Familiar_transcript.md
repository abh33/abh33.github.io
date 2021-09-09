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

# Getting familiar with CoppeliaSim

- Hello Guys.

- Welcome to the first tutorial on the course "**Introduction to CoppeliaSim**".

- This tutorial is an introductory tutorial for getting familiar with the CoppeliaSim software.

- We will learn about **different tools** and their uses. Along with that we will also cover the concepts of **page, views and scenes**.

- So let's get started.

- After launching the CoppeliaSim, what you see now is a **scene**.

- Scene includes of cameras, lights, views, pages, the environment, floor, scripts, other objects added etc. You may not be familiar with some of these terms. Let's see what they are.

- Now add a  **new scene** by clicking on **file** and then click on **new scene** option. Now we can see a new scene.

- Click on the **scene selector button** . We can **navigate** between different scenes using this. Let's go back to the old scene.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Transcript/LeD%201.2_transcript_Figure_1.jpg)

  ​                                                                     *Figure 1: Scene Selector button*

  ​                                                                             

- Next we can **load a scene**, click on **file**, then click on **open scene**. There are some scene files already present in CoppeliaSim. Scroll the list and open the scene **e-puckDemo**.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Transcript/LeD%201.2_transcript_Figure_2.gif)

  ​                                                    *Figure 2: Loading a scene and navigation between scenes*

- Now you can see 4 different **views** in a single **page**.

- For example if we look something from its top portion, what we see is its **top view**. That is a view. 

- Similarly we can look at that object from different angles, which will produce more views.

-   A **page** is something which we are **looking at**. 

- The main **viewing surface** of the scene is a **page**. A scene contains one or more pages and a page contains one or several views. 

  -----------------------------------------------------------------------------------------------------------------------------------------------------

  **Quick Question**

  *What does page contain?*

  - [ ] *Scenes*

  - [ ] *Views*

  - [ ] *Floors*

  - [ ] *Images*

    

- There is a **page selector button.**

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Transcript/LeD%201.2_transcript_Figure_3.jpg)

  ​                                                                  *Figure 3: Page Selector Button*

- Click on that. Now we can see different pages. There are **8 pages** here. We can select page 4 now. It is a top view. Anyway in the default scene which we see first, top view is in **page 6.**

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Transcript/LeD%201.2_transcript_Figure_4.gif)

  ​                                                    *Figure 4: Page selection*

- Now select the page 1 and let's move to **camera navigation buttons**.

- I said we are looking at the object, but how are we looking at them?

- We are looking at the **pages** using **cameras**. There is a **default camera** in the scene.

- If we want to **add** more cameras to view from different angles, we can add them by clicking on add and then click on camera.

- If we need a particular **view** or if we want to **focus** on a particular object, this can be used.

- In this **e-puckDemo** scene there is an additional camera focusing on the **e-Puck**. That view is also included in the first page.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Transcript/LeD%201.2_transcript_Figure_5.png)
  
  ​                                                 *Figure 5: Additional Camera view*

- Let's look at the **camera tools**.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Transcript/LeD%201.2_transcript_Figure_6.png)

  ​                                                            *Figure 6: Camera Navigation Tools*

- If we want to move the view **up and down** or **left and right** , there is a **camera pan** tool for that.

- Let's select the tool, and now **drag** the mouse for desired movements.

- Next is **camera rotate** tool, as the name suggests this is for **rotation**. Click on  a point in the scene  and rotate.

- The Next tool which is **camera shift** gives a **zoom effect** in the direction of view.

- Select the **camera angle button** tool and drag the mouse along a clicked point in the scene. It may seem like this has no difference with the **shift tool**. Now lets try on top view. Select the top view page

- They are not same, In  **top view** shifting might not see any effect, but **camera angle button** adjusts the view size of camera. 

  -----------------------------------------------------------------------------------------------------------------------------------------------------

  **Quick question**

  *Which tool is used for zooming effect?*

  - [ ] *Camera Pan*
  - [ ] *Camera Rotate*
  - [ ] *Camera angle button*
  - [ ] *Camera shift*

- The last one is **fit to view**, select the flower pot and click the **fit to view button**, you can see that camera is focusing on the flower pot now.

- Now remove the selection and click the button again, the view is adjusted in such a way to fit all the objects in the scene.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Transcript/LeD%201.2_transcript_Figure_7.gif)

  ​                                             *Figure 7: Camera Navigation*                                            

- There is another tool which is called as **click to selection tool**. If this tool is selected we can select the objects by clicking on them. Otherwise it is not possible. It is good to keep this tool always selected.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Transcript/LeD%201.2_transcript_Figure_8.png)

  ​                                                                                *Figure 8: Click Selection Tool*

- There are object shift and object rotate tools for **translation** and **rotation** operations. We will see them in detail in the upcoming lectures.

  ​                                                                                  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Transcript/LeD%201.2_transcript_Figure_9.png)     

  ​                                             *Figure 9: Position and orientation manipulation tools*

- Now the **undo** and **redo** tools are also there. 

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Transcript/LeD%201.2_transcript_Figure_10.png)

  ​                                                   *Figure 10: Undo and Redo tools*

- After that comes the **simulation tools**. 

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Transcript/LeD%201.2_transcript_Figure_11.png)

  ​                                                            *Figure 11: Simulation tools*

- There is **start, pause and stop** tools for controlling the simulation. Let's play the simulation and see.

- We can see the **e-puck** moving. Now stop the simulation and we can move to the next tool which is **real time mode clock**. 

- There are **simulation time** and **real time**. Simulation time is always constant. We can think of it as a clock inside CoppeliaSim. The default **step size** of which is **dt =50 ms**. We can change this and other simulation properties in the **simulation settings**.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Transcript/LeD%201.2_transcript_Figure_12.png)

  ​                                                                          *Figure 12: Simulation settings*

-  But the **real time** is the **actual time**. It tells us how the same simulation is happening in the actual time. 

- The **real time factor** (RTF) compares the simulation and actual time. Its value is between 0 and 1. If RTF is 1, there is no lag between simulation and actual time. 

  -----------------------------------------------------------------------------------------------------------------------------------------------------

  **Quick Question**

  *What is the default simulation step size in CoppeliaSim?*

  - [ ] *dt= 25 ms*
  - [ ] *dt= 100 ms*
  - [ ] *dt= 50 ms*
  - [ ] *dt= 75 ms*

- There are two other symbols in the shape of **tortoise** and **rabbit** which are used for **slowing** and **speeding** the simulation respectively. 

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Transcript/LeD%201.2_transcript_Figure_13.gif)

  ​                                                              *Figure 13: Simulation Demo*

- There are various other features as well. Try to explore more. You can use the **CoppeliaSim Manua**l for additional reading. Click **help** and then **select help topics**. You can also google the topics.

- So that's it. Thank you all! See you in the next.

  -----------------------------------------------------------------------------------------------------------------------------------------------------

  

