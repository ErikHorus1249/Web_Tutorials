import hashlib

def hashModel(src,dst):
    BLOCK_SIZE = 65536 # The size of each read from the file
    file_hash = hashlib.sha256() # Create the hash object, can use something other than `.sha256()` if you wish

    with open(src, 'rb') as f: # Open the file to read it's bytes
        fb = f.read(BLOCK_SIZE) # Read from the file. Take in the amount declared above
        while len(fb) > 0: # While there is still data being read from the file
            file_hash.update(fb) # Update the hash
            fb = f.read(BLOCK_SIZE) # Read the next block from the file

    result = file_hash.hexdigest()

    # with open(dst, "w") as f:
    #     f.write(str(result))

    return result # Get the hexadecimal digest of the hash

def compareModel(regular_model_location, new_model):
    with open(regular_model_location,'r') as f:
        old_model = f.read()
        f.close()
    
    if old_model == new_model:
        f = open(regular_model_location,"w")
        f.write(old_model)
        f.closed()
        return True
    else:
        return False
    
# print(hashModel(src,dst))