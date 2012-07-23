import os
import re
import shutil

root_src_dir = 'posts'

for src_dir, dirs, files in os.walk(root_src_dir):
    for f in files:
        m = re.search('(\d{4})-(\d{2})-(\d{2})-(.+)', f)
        year, month, day, name = m.groups()
        if not os.path.exists(year):
            os.mkdir(year)
        
        month_dir = os.path.join(year, month)
        if not os.path.exists(month_dir):
            os.mkdir(month_dir)

        day_dir = os.path.join(year, month, day)
        if not os.path.exists(day_dir):
            os.mkdir(day_dir)

        dest_file = os.path.join(day_dir, name)
        shutil.copy(os.path.join(root_src_dir, f), dest_file)
