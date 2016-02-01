class SortContent

  def process
    sorted_content = sort_by_rating(request_content)
    videos_for_use = reduce_array_size(sorted_content)
    Content.update_attribute('daily_content', videos_for_use)
  end

  def request_content # Could even take an argument of the site to make request from?
    # HTTP request to relevant API in this method, thereby extracting it from the controller.
    # Also throw some recursion in here to make sure the endpoint is available etc. i.e status code stuff.
    # Potentially limit amount of items coming in at this point?
  end

  def sort_by_rating(unsorted_array)
    videos_by_rating = unsorted_array.sort_by do |video|
      video[:rating]
    end
    videos_by_rating
  end

  def reduce_array_size(sorted_content)
    sorted_content.last(1000)
  end

end
