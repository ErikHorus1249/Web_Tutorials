from minecraftstuff import MinecraftDrawing
from mcpi.minecraft import Minecraft
from mcpi import block

mc = minecraft.create()

pos = mc.player.getTilePos()

mcdrawing = MinecraftDrawing(mc)

mcdrawing.drawCircle(pos.x, pos.y+15, pos.z, 10, 57)
